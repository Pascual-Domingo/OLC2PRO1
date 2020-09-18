
import { TIPO_OPERACION, TIPO_VALOR, TIPO_INSTRUCCION, instruccionesAPI } from './instrucciones';
import { TIPO_DATO, TS } from './tabla_simbolos';
import { TE } from './tabla_errores';
import { TRANSFERENCIA } from './transferencia';


let tsGlobal: TS;
let Terrores: TE;
let transferir = new TRANSFERENCIA();
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
    }

    if (miTransferencia.flagContinue || miTransferencia.flagBreak || miTransferencia.flagReturn) break;

  }

}

function procesarTransferencia(instruccion, tablaDeSimbolos, miTransferencia) {
  if (instruccion.valor === "return" && instruccion.expresion !== undefined && miTransferencia.flagFuncion) {
    miTransferencia.expresion = procesarcadena(instruccion.expresion, tablaDeSimbolos);
    miTransferencia.flagReturn = true;
    /*console.log(result);
    miTransferencia.expresion = result;
    */
  } else if (instruccion.valor === "return" && instruccion.expresion === undefined && miTransferencia.flagFuncion) {
    console.log('funcion sin retorno');
    miTransferencia.flagReturn = true;
  } else {
    let msj = '';
    if (!miTransferencia.flagFuncion) msj = 'una funcion'; else
      if (!miTransferencia.flagCiclo) msj = 'un ciclo'; else
        if (!miTransferencia.flagSwitch) msj = 'un switch-case';
    Terrores.add("semantico", ' la sentencia ' + instruccion.valor + ' debe estar dentro de ' + msj, instruccion.linea, instruccion.columna);
  }
}

function procesarfuncion(instruccion, tablaDeSimbolos) {
  _ambito = "local";
  const mifuncion = tablaDeSimbolos.obtener(instruccion.identificador, instruccion.linea, instruccion.columna);
  const tsFun = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
  const transferenciaFuncion = new TRANSFERENCIA();
  let flag: boolean = false;
  if (instruccion.parametro === undefined && mifuncion.parametro === undefined) {
    flag = true;
  } else if (instruccion.parametro !== undefined && mifuncion.parametro !== undefined) {
    if (instruccion.parametro.length === mifuncion.parametro.length) {
      procesarParametro(mifuncion.parametro, instruccion.parametro, tsFun);
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
    console.log(transferenciaFuncion.expresion);
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


function procesarParametro(parametro, llamada, tablaDeSimbolos) {
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
    procesar_asiganacionDeclarado(result, tablaDeSimbolos)
  }

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
  } else {

    return result;
  }
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
    const valorIzq = exprRelacional(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = exprRelacional(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq && valorDer;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  if (expresion.tipo === TIPO_OPERACION.OR) {
    // En este caso necesitamos procesar los operandos para ||.
    const valorIzq = exprRelacional(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = exprRelacional(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq || valorDer;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  if (expresion.tipo === TIPO_OPERACION.NOT) {
    console.log(expresion);
    // En este caso necesitamos procesar solamente un operando para !.
    const valor = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
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


  } else if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL ||
    expresion.tipo === TIPO_OPERACION.NO_IGUAL) {
    let valorIzq = expAritmetica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    let valorDer = expAritmetica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL) return valorIzq === valorDer;
    if (expresion.tipo === TIPO_OPERACION.NO_IGUAL) return valorIzq !== valorDer;
  }

  return expAritmetica(expresion, tablaDeSimbolos);


}


function expAritmetica(expresultion: any, tablaDeSimbolos) {
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
          return { valor: true, tipo: TIPO_DATO.BOOLEANO }
        }
        return { valor: false, tipo: TIPO_DATO.BOOLEANO }
      }

      return { valor: sym.valor, tipo: sym.tipo };

    } else if (expresultion.tipo === TIPO_VALOR.BOOLEANO) {
      if (expresultion.valor === "true") {
        return { valor: true, tipo: TIPO_DATO.BOOLEANO }
      }
      return { valor: false, tipo: TIPO_DATO.BOOLEANO }
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
