
import { TIPO_OPERACION, TIPO_VALOR, TIPO_INSTRUCCION, instruccionesAPI, TIPO_OPCION_SWITCH } from './instrucciones';
import { TIPO_DATO, TS } from './tabla_simbolos';
import { TE } from './tabla_errores';
import { TRANSFERENCIA } from './transferencia';
import { variable } from '@angular/compiler/src/output/output_ast';
import { iif } from 'rxjs';


let tsGlobal: TS;
let Terrores: TE;
let transferir = new TRANSFERENCIA(false);
let salidaConsola = "";
let _ambito = "global";

function _main(AST) {
  console.log(AST);
  Terrores = new TE();
  tsGlobal = new TS([], Terrores);
  salidaConsola = "";
  primerRecorrido(AST);
  segundoRecorrido(AST);
  //tsGlobal.print();
  return Terrores.print() + salidaConsola;
}

function primerRecorrido(instrucciones: any) { //guarda funciones
  if (instrucciones.tipo === TIPO_INSTRUCCION.FUNCION) {
    procesarDeclaracion(instrucciones, tsGlobal);
  }
  try {
    primerRecorrido(instrucciones.izquierda);
    primerRecorrido(instrucciones.derecha);
  } catch (error) {

  }

}

function segundoRecorrido(instruccion) { //recopila variables globales y ejecucion
  if (instruccion.tipo === 'INSTRUCCIONES') {
    listaInstruccion(instruccion.instruccion, tsGlobal, transferir);
  }
  try {
    segundoRecorrido(instruccion.izquierda);
    segundoRecorrido(instruccion.derecha);
  } catch (error) {

  }
}

function listaInstruccion(instruccion, tablaDeSimbolos, miTransferencia) {
  for (let i = 0; i < instruccion.length; i++) {
    if (instruccion[i].tipo === TIPO_INSTRUCCION.IMPRIMIR) {
      try { imprimir(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.VARIABLE) {
      try { procesarVariables(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.LLAMADA) {
      try { procesarfuncion(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.TRANSFERIR) {
      try { procesarTransferencia(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.IF) {
      try { procesarIf(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.IF_ELSE) {
      try { procesarIf_else(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.ELSEIF) {
      try { procesarElseIf(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MASMAS) {
      try { masMas(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MENOSMENOS) {
      try { menosMenos(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.SWITCH) {
      try { procesarSwitch(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.INS_WHILE) {
      try { procesarwHILE(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.INS_DOWHILE) {
      try { procesarDOwHILE(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.INS_FOR) {
      try { procesarFor(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    }



    if (miTransferencia.flagContinue || miTransferencia.flagBreak || miTransferencia.flagReturn) break;

  }

}

function procesarFor(instruccion, tablaDeSimbolos, miTransferencia) {
  const tsFor = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
  if (instruccion.variable.tipo !== TIPO_VALOR.IDENTIFICADOR) {
    //valor = procesarcadena(instruccion.variable, tablaDeSimbolos); //aqui quiero que retorne: tipo y valor
    procesarVariables(instruccion.variable, tsFor);
  }
  const valor = tsFor.obtener(instruccion.aumento.identificador, instruccion.aumento.linea, instruccion.aumento.columna);

  //const valor = procesarExpresionCadena(instruccion.valorVariable, tablaDeSimbolos); //aqui quiero que retorne: tipo y valor
  //tablaDeSimbolos.actualizar(instruccion.variable, valor);
  if (valor.tipo_declaracion === "let") {
    for (let i = valor.valor; expLogica(instruccion.expresionlogica, tsFor); listaInstruccion([instruccion.aumento], tsFor, miTransferencia)) {
      const trans_for = new TRANSFERENCIA(miTransferencia.flagFuncion);
      trans_for.flagCiclo = true;
      const tsPara = new TS(copiar(tsFor.simbolos), trans_for);
      listaInstruccion(instruccion.instruccion, tsPara, trans_for);
      if (trans_for.flagBreak || trans_for.flagReturn) {
        miTransferencia.expresion = trans_for.expresion;
        break;
      }
    }
  } else {
    //error semantico
  }


}




function procesarDOwHILE(instruccion, tablaDeSimbolos, miTransferencia) {
  do {
    const tsMientras = new TS(copiar(tablaDeSimbolos.simbolos), tablaDeSimbolos);
    const trans_while = new TRANSFERENCIA(miTransferencia.flagFuncion);
    trans_while.flagCiclo = true;
    listaInstruccion(instruccion.instruccion, tsMientras, trans_while);

    if (trans_while.flagBreak || trans_while.flagReturn) {
      miTransferencia.expresion = trans_while.expresion;
      break;
    }

  } while (expLogica(instruccion.expresion, tablaDeSimbolos));
}

function procesarwHILE(instruccion, tablaDeSimbolos, miTransferencia) {
  while (expLogica(instruccion.expresion, tablaDeSimbolos)) {
    const tsMientras = new TS(copiar(tablaDeSimbolos.simbolos), tablaDeSimbolos);
    const trans_while = new TRANSFERENCIA(miTransferencia.flagFuncion);
    trans_while.flagCiclo = true;
    listaInstruccion(instruccion.instruccion, tsMientras, trans_while);

    if (trans_while.flagBreak || trans_while.flagReturn) {
      miTransferencia.expresion = trans_while.expresion;
      break;
    }
  }
}

function procesarSwitch(instruccion, tablaDeSimbolos, miTransferencia) {
  var evaluar = true;
  const valorExpresion = procesarcadena(instruccion.expresion, tablaDeSimbolos);
  const tsSwitch = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
  const trans_switch = new TRANSFERENCIA(miTransferencia.flagFuncion);
  trans_switch.flagSwitch = true;
  const lscasos = instruccion.casos;
  for (let index = 0; index < lscasos.length; index++) {
    if (lscasos[index].tipo === TIPO_OPCION_SWITCH.CASO) {
      const valorExpCase = procesarcadena(lscasos[index].expresion, tsSwitch);
      if (valorExpCase.valor == valorExpresion.valor) {
        listaInstruccion(lscasos[index].instrucciones, tsSwitch, trans_switch);
        evaluar = false;
        if (trans_switch.flagReturn || trans_switch.flagBreak) break;
      }
    } else {
      if (evaluar)
        listaInstruccion(lscasos[index].instrucciones, tsSwitch, trans_switch);
    }
  }

  if (trans_switch.flagReturn) miTransferencia.expresion = trans_switch.expresion;


  /*
  instruccion.casos.forEach(caso => {
    if (caso.tipo == TIPO_OPCION_SWITCH.CASO) {
      const valorExpCase = procesarcadena(caso.expresion, tsSwitch);

      if (valorExpCase.valor == valorExpresion.valor) {
        listaInstruccion(caso.instrucciones, tsSwitch, trans_switch);
        evaluar = false;
        if (trans_switch.flagReturn) break;
      }
    }
    else {
      if (evaluar)
        listaInstruccion(caso.instrucciones, tsSwitch, trans_switch);
    }
  });

  */


}

function procesarIf(instruccion, tablaDeSimbolos, miTransferencia) {
  const valorCondicion = expLogica(instruccion.expresion, tablaDeSimbolos);
  //console.log(valorCondicion);
  if (valorCondicion) {
    const tsIf = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
    //console.log(instruccion.instrucciones);
    listaInstruccion(instruccion.instrucciones, tsIf, miTransferencia);
  }
  return valorCondicion;
}

function procesarIf_else(instruccion, tablaDeSimbolos, miTransferencia) {
  const valorCondicion = procesarIf(instruccion.instruccionIf, tablaDeSimbolos, miTransferencia);
  if (!valorCondicion) {
    const tsElse = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
    listaInstruccion(instruccion.instruccionElse, tsElse, miTransferencia);
  }
}

function procesarElseIf(instruccion, tablaDeSimbolos, miTransferencia) {
  const condicionIf = procesarIf(instruccion.instruccionIf, tablaDeSimbolos, miTransferencia);
  let condicionElseIf = false;
  if (!condicionIf) { //entra en las sentencias else if(){}
    const element = instruccion.instruccionElseIf;
    for (let index = 0; index < element.length; index++) { //recorre cada else if
      condicionElseIf = procesarIf(element[index], tablaDeSimbolos, miTransferencia);
      if (condicionElseIf) break; //si lagun else if es verdadero sale del ciclo
    }
  }

  if (instruccion.instruccionElse !== undefined) {
    if (!condicionElseIf) {
      const tsElse = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
      listaInstruccion(instruccion.instruccionElse, tsElse, miTransferencia);
    }
  }
}

function procesarTransferencia(instruccion, tablaDeSimbolos, miTransferencia) {
  if (instruccion.valor === "break" && (miTransferencia.flagSwitch || miTransferencia.flagCiclo)) {
    miTransferencia.flagBreak = true;
  } else if (instruccion.valor === "return" && instruccion.expresion !== undefined && miTransferencia.flagFuncion) {
    miTransferencia.expresion = procesarcadena(instruccion.expresion, tablaDeSimbolos);
    miTransferencia.flagReturn = true;
  } else if (instruccion.valor === "return" && instruccion.expresion === undefined && miTransferencia.flagFuncion) {
    console.log('funcion sin retorno');
    miTransferencia.flagReturn = true;
  } else {
    let msj = '';
    if (!miTransferencia.flagFuncion) msj = 'una funcion'; else
      if (!miTransferencia.flagCiclo) msj = 'un ciclo'; else
        if (!miTransferencia.flagSwitch) msj = 'un switch-case';
    Terrores.add("semantico", ' la sentencia ' + instruccion.valor + ' debe estar dentro de ' + msj, instruccion.linea, instruccion.columna);
    miTransferencia.flagReturn = true;
  }
}

function procesarfuncion(instruccion, tablaDeSimbolos) {
  _ambito = "local";
  const mifuncion = tablaDeSimbolos.obtener(instruccion.identificador, instruccion.linea, instruccion.columna);
  const tsFun = new TS(copiar(tsGlobal.simbolos), Terrores);
  const transferenciaFuncion = new TRANSFERENCIA(true);
  let flag: boolean = false;
  if (instruccion.parametro === undefined && mifuncion.parametro === undefined) {
    flag = true;
  } else if (instruccion.parametro !== undefined && mifuncion.parametro !== undefined) {
    if (instruccion.parametro.length === mifuncion.parametro.length) {
      procesarParametro(mifuncion.parametro, instruccion.parametro, tsFun, tablaDeSimbolos);
      flag = true;
    } else {
      Terrores.add("semantico", ' parametro fuera de rango en la funcion ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
    }
  } else {
    Terrores.add("semantico", ' parametro fuera de rango en la funcion ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
  }

  if (flag) {
    transferenciaFuncion.flagFuncion = true;
    listaInstruccion(mifuncion.valor, tsFun, transferenciaFuncion);
    if (mifuncion.tipo === transferenciaFuncion.expresion.tipo) return transferenciaFuncion.expresion;
    if (mifuncion.tipo === TIPO_DATO.VOID && transferenciaFuncion.expresion !== undefined) {
      Terrores.add("semantico", ' funcion no retornable ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
    } else if (mifuncion.tipo === undefined) {
      return transferenciaFuncion.expresion;
    } else {
      Terrores.add("semantico", ' funcion no retornable ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
    }
  }
}


function procesarParametro(parametro, llamada, tablaDeSimbolos, simboloanterior) {
  for (let i = 0; i < parametro.length; i++) {
    /* crea objeto tipo variable */
    const result = instruccionesAPI.nuevoDeclaracionAsignacion(
      parametro[i].identificador,
      parametro[i].tipo,
      llamada[i],
      parametro[i].linea,
      parametro[i].columna
    );
    result.tipo_declaracion = "let";
    procesarDeclaracion(result, tablaDeSimbolos)
    const valor = procesarcadena(result.expresion, simboloanterior); //aqui quiero que retorne: tipo y valor
    tablaDeSimbolos.actualizar(result.identificador, valor, result.linea, result.columna);
    //procesar_asiganacionDeclarado(result, tablaDeSimbolos)
  }

}

function masMas(instruccion, tablaDeSimbolos) {
  const sym = tablaDeSimbolos.obtener(instruccion.identificador, instruccion.linea, instruccion.columna);
  const valor = { valor: sym.valor + 1, tipo: sym.tipo }
  tablaDeSimbolos.actualizar(sym.id, valor, sym.linea, sym.columna);
  valor.valor = valor.valor - 1;
  return valor;
}

function menosMenos(instruccion, tablaDeSimbolos) {
  const sym = tablaDeSimbolos.obtener(instruccion.identificador, instruccion.linea, instruccion.columna);
  const valor = { valor: sym.valor - 1, tipo: sym.tipo }
  tablaDeSimbolos.actualizar(sym.id, valor, sym.linea, sym.columna);
  valor.valor = valor.valor + 1;
  return valor;
}

function procesarAsignacion(instruccion, tablaDeSimbolos) {
  const valor = procesarcadena(instruccion.expresion, tablaDeSimbolos); //aqui quiero que retorne: tipo y valor
  tablaDeSimbolos.actualizar(instruccion.identificador, valor, instruccion.linea, instruccion.columna);
}

function procesarDeclaracion(instruccion, tablaDeSimbolos) { //aqui cambiamos para que acepte el tipo_dato de la declaracion
  tablaDeSimbolos.agregar(
    instruccion.tipo_declaracion,
    instruccion.identificador,
    instruccion.tipo_variable,
    instruccion.valor,
    _ambito,
    instruccion.linea,
    instruccion.columna,
    instruccion.parametro
  );


}

function procesar_asiganacionDeclarado(instruccion, tablaDeSimbolos) {
  procesarDeclaracion(instruccion, tablaDeSimbolos);
  procesarAsignacion(instruccion, tablaDeSimbolos);
}

function procesarVariables(variables, tablaDeSimbolos) {
  (variables.lsID).forEach(element => {
    element.tipo_declaracion = variables.tipo_declaracion;
    try {
      if (element.tipo === TIPO_INSTRUCCION.DECLARACION) {
        procesarDeclaracion(element, tablaDeSimbolos);
      } else if (element.tipo === TIPO_INSTRUCCION.ASIGNACION_DECLARADA) {
        procesar_asiganacionDeclarado(element, tablaDeSimbolos);
      } else if (element.tipo === TIPO_INSTRUCCION.ASIGNACION) {
        procesarAsignacion(element, tablaDeSimbolos);
      }
    } catch (error) {

    }
  });
}

function imprimir(instruccion, tablaDeSimbolos) {
  const cadena = procesarcadena(instruccion.expresion, tablaDeSimbolos).valor;
  salidaConsola += cadena + '\n';

}

function procesarcadena(instruccion, tablaDeSimbolos) {
  const result = expLogica(instruccion, tablaDeSimbolos);

  if (typeof result === 'boolean') {
    if (result) {
      return { valor: "true", tipo: TIPO_DATO.BOOLEANO }
    }
    return { valor: "false", tipo: TIPO_DATO.BOOLEANO }
  }

  return result;

  /*
  if (expresion.tipo === TIPO_OPERACION.SUMA) {
      // Es una operación de concatenación.
      // En este caso necesitamos procesar los operandos antes de realizar la concatenación.
      // Para esto invocamos (recursivamente) esta función para resolver los valores de los operandos.
      const cadIzq = procesarcadena(expresion.operandoIzq, tablaDeSimbolos).valor;      // resolvemos el operando izquierdo.
      const cadDer = procesarcadena(expresion.operandoDer, tablaDeSimbolos).valor;      // resolvemos el operando derecho.
      // Retornamos el resultado de la operación de concatenación.
      const res=cadIzq + cadDer;
      return {valor: res, tipo: TIPO_DATO.STRING};   

  } else if (expresion.tipo === TIPO_VALOR.CADENA) {
      // Es una cadena.
      // En este caso únicamente retornamos el valor obtenido por el parser directamente.
      return {valor: expresion.valor, tipo: TIPO_DATO.STRING };
  } else {
      // Es una epresión numérica.
      // En este caso invocamos la función que se encarga de procesar las expresiones numéricas
      // y retornamos su valor en cadena.
      return expLogica(expresion, tablaDeSimbolos);
  }

  */
}

function expLogica(expresion, tablaDeSimbolos) {

  if (expresion.tipo === TIPO_OPERACION.AND) {
    // En este caso necesitamos procesar los operandos para &&.
    const valorIzq = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = expLogica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq && valorDer;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  if (expresion.tipo === TIPO_OPERACION.OR) {
    // En este caso necesitamos procesar los operandos para ||.
    const valorIzq = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = expLogica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq || valorDer;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  if (expresion.tipo === TIPO_OPERACION.NOT) {
    //console.log(expresion);
    // En este caso necesitamos procesar solamente un operando para !.
    const valor = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    //console.log(valor);
    if (typeof valor === 'boolean') return !valor;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  return exprRelacional(expresion, tablaDeSimbolos);
}

function exprRelacional(expresion, tablaDeSimbolos) {

  if (expresion.tipo === TIPO_OPERACION.MAYOR_QUE ||
    expresion.tipo === TIPO_OPERACION.MENOR_QUE ||
    expresion.tipo === TIPO_OPERACION.MAYOR_IGUAL ||
    expresion.tipo === TIPO_OPERACION.MENOR_IGUAL) {
    // En este caso necesitamos procesar los operandos antes de realizar la comparación.
    let valorIzq = expAritmetica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    let valorDer = expAritmetica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (valorIzq.tipo !== TIPO_DATO.NUMERO || valorDer.tipo !== TIPO_DATO.NUMERO) {
      Terrores.add("semantico", 'se esperaban expresiones numericas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    } else {
      valorIzq = valorIzq.valor;
      valorDer = valorDer.valor;
    }

    if (expresion.tipo === TIPO_OPERACION.MAYOR_QUE) return valorIzq > valorDer;
    if (expresion.tipo === TIPO_OPERACION.MENOR_QUE) return valorIzq < valorDer;
    if (expresion.tipo === TIPO_OPERACION.MAYOR_IGUAL) return valorIzq >= valorDer;
    if (expresion.tipo === TIPO_OPERACION.MENOR_IGUAL) return valorIzq <= valorDer;


  } else if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL || expresion.tipo === TIPO_OPERACION.NO_IGUAL) {
    let valorIzq = expAritmetica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    let valorDer = expAritmetica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.

    if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL) {
      if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq === valorDer;
      return valorIzq.valor === valorDer.valor;
    }
    if (expresion.tipo === TIPO_OPERACION.NO_IGUAL) {
      if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq !== valorDer;
      return valorIzq.valor !== valorDer.valor;
    }
  }

  return expAritmetica(expresion, tablaDeSimbolos);


}


function expAritmetica(expresultion: any, tablaDeSimbolos) {
  if (expresultion.tipo === TIPO_INSTRUCCION.MASMAS) {
    return masMas(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_INSTRUCCION.MENOSMENOS) {
    return menosMenos(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_INSTRUCCION.LLAMADA) {
    return procesarfuncion(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_OPERACION.NEGATIVO) {
    // Es un valor negado.
    // En este caso necesitamos procesar el valor del operando para poder negar su valor.
    // Para esto invocamos (recursivamente) esta función para sesolver el valor del operando.
    const valor = expAritmetica(expresultion.operandoIzq, tablaDeSimbolos).valor;     // resultolvemos el operando
    const result = valor * -1;  // Retornamos el valor negado.

    return { valor: result, tipo: TIPO_DATO.NUMERO };
  } else
    if (expresultion.tipo == TIPO_OPERACION.SUMA
      || expresultion.tipo === TIPO_OPERACION.RESTA
      || expresultion.tipo === TIPO_OPERACION.MULTIPLICACION
      || expresultion.tipo === TIPO_OPERACION.DIVISION
      || expresultion.tipo === TIPO_OPERACION.EXPONENTE
      || expresultion.tipo === TIPO_OPERACION.MODULAR) {

      let valorIzq = expAritmetica(expresultion.operandoIzq, tablaDeSimbolos);      // resultolvemos el operando izquierdo.
      let valorDer = expAritmetica(expresultion.operandoDer, tablaDeSimbolos);      // resultolvemos el operando derecho.

      if (valorIzq.tipo !== TIPO_DATO.NUMERO || valorDer.tipo !== TIPO_DATO.NUMERO) {
        if (expresultion.tipo === TIPO_OPERACION.SUMA) {
          const result = valorIzq.valor + valorDer.valor;
          return { valor: result, tipo: TIPO_DATO.STRING }
        }
        Terrores.add("semantico", 'se esperaban expresiones numericas para ejecutar la: ' + expresultion.tipo, expresultion.linea, expresultion.columna);
      } else {
        valorIzq = valorIzq.valor;
        valorDer = valorDer.valor;
      }

      /* operar la expresultion aritmetica*/
      if (expresultion.tipo == TIPO_OPERACION.SUMA) {
        const result = valorIzq + valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.RESTA) {
        const result = valorIzq - valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.MULTIPLICACION) {
        const result = valorIzq * valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.MODULAR) {
        const result = valorIzq % valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.DIVISION) {
        if (valorDer === 0) {
          Terrores.add("semantico", 'la division entre 0 da como resultultado: ' + valorIzq / valorDer, expresultion.linea, expresultion.columna);
        } else {
          const result = valorIzq / valorDer;
          return { valor: result, tipo: TIPO_DATO.NUMERO };
        }
      }
      if (expresultion.tipo === TIPO_OPERACION.EXPONENTE) {
        const resultult = Math.pow(valorIzq, valorDer);
        return { valor: resultult, tipo: TIPO_DATO.NUMERO };
      }

      /* aqui termina las operaciones aritmeticas basicas */

    } else if (expresultion.tipo === TIPO_VALOR.CADENA) { //si es cadena o string
      return { valor: expresultion.valor, tipo: TIPO_DATO.STRING }
    }
    else if (expresultion.tipo == TIPO_VALOR.NUMERO) {
      // Es un valor numérico.
      // En este caso únicamente retornamos el valor obtenido por el parser directamente.
      return { valor: expresultion.valor, tipo: TIPO_DATO.NUMERO }
    } else if (expresultion.tipo === TIPO_VALOR.IDENTIFICADOR) {
      // Es un identificador.
      // Obtenemos el valor de la tabla de simbolos
      const sym = tablaDeSimbolos.obtener(expresultion.valor, expresultion.linea, expresultion.columna);
      if (sym.tipo === TIPO_DATO.BOOLEANO) {
        if (sym.valor === "true") {
          return true;//{ valor: true, tipo: TIPO_DATO.BOOLEANO }
        }
        return false;//{ valor: false, tipo: TIPO_DATO.BOOLEANO }
      }

      return { valor: sym.valor, tipo: sym.tipo };

    } else if (expresultion.tipo === TIPO_VALOR.BOOLEANO) {
      if (expresultion.valor === "true") {
        return true;//{ valor: true, tipo: TIPO_DATO.BOOLEANO }
      }
      return false;//{ valor: false, tipo: TIPO_DATO.BOOLEANO }
    }
    else {
      Terrores.add("semantico", 'expresion no valida ' + expresultion.tipo + ': ' + expresultion.valor, expresultion.linea, expresultion.columna);
    }
}

function copiar(simbolos) {
  let copia = [];
  simbolos.forEach(element => {
    copia.push(element);
  });

  return copia;
}

export const ejecutar = _main;
