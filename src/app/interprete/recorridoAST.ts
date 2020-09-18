
import { TIPO_OPERACION, TIPO_VALOR, TIPO_INSTRUCCION } from './instrucciones';
import { TIPO_DATO, TS } from './tabla_simbolos';
import { TE } from './tabla_errores';


let tsGlobal: TS;
let Terrores: TE;
let salidaConsola = "";
let _ambito = "global";

function _main(AST) {
  console.log(AST);
  Terrores = new TE();
  tsGlobal = new TS([], Terrores);
  salidaConsola = "";
  primerRecorrido(AST, tsGlobal);
  tsGlobal.print();
  return Terrores.print() + salidaConsola;
}

function primerRecorrido(instrucciones: any, tablaDeSimbolos) {
  //console.log(instrucciones);
  return listaInstruccion(instrucciones, tablaDeSimbolos);

}

function listaInstruccion(instruccion, tablaDeSimbolos) {
  for (let i = 0; i < instruccion.length; i++) {
    if (instruccion[i].tipo === TIPO_INSTRUCCION.IMPRIMIR) {
      try { imprimir(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.VARIABLE) {
      try { procesarVariables(instruccion[i], tablaDeSimbolos); } catch (error) { }
    }



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
    undefined,
    _ambito,
    instruccion.linea,
    instruccion.columna,
    undefined
  );


}

function procesar_asiganacionDeclarado(instruccion, tablaDeSimbolos) {
  procesarDeclaracion(instruccion, tablaDeSimbolos);
  procesarAsignacion(instruccion, tablaDeSimbolos);
}

function procesarVariables(variables, tablaDeSimbolos) {
  (variables.lsID).forEach(element => {
    element.tipo_declaracion = variables.tipo_declaracion;
    console.log(element);
    try {
      if (element.tipo === TIPO_INSTRUCCION.DECLARACION) {
        procesarDeclaracion(element, tablaDeSimbolos);
      } else if (element.tipo === TIPO_INSTRUCCION.ASIGNACION_DECLARADA) {
        procesar_asiganacionDeclarado(element, tablaDeSimbolos);
      }else if(element.tipo === TIPO_INSTRUCCION.ASIGNACION){
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
    return valorIzq && valorDer;
  }
  if (expresion.tipo === TIPO_OPERACION.OR) {
    // En este caso necesitamos procesar los operandos para ||.
    const valorIzq = exprRelacional(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = exprRelacional(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    return valorIzq || valorDer;
  }
  if (expresion.tipo === TIPO_OPERACION.NOT) {
    console.log(expresion);
    // En este caso necesitamos procesar solamente un operando para !.
    const valor = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    return !valor;
  }
  return exprRelacional(expresion, tablaDeSimbolos);
}

function exprRelacional(expresion, tablaDeSimbolos) {

  if (expresion.tipo === TIPO_OPERACION.MAYOR_QUE ||
    expresion.tipo === TIPO_OPERACION.MENOR_QUE ||
    expresion.tipo === TIPO_OPERACION.MAYOR_IGUAL ||
    expresion.tipo === TIPO_OPERACION.MENOR_IGUAL ||
    expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL ||
    expresion.tipo === TIPO_OPERACION.NO_IGUAL) {
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
    if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL) return valorIzq === valorDer;
    if (expresion.tipo === TIPO_OPERACION.NO_IGUAL) return valorIzq !== valorDer;

  }

  return expAritmetica(expresion, tablaDeSimbolos);


}


function expAritmetica(expresultion: any, tablaDeSimbolos) {
  
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
      console.log(expresultion);
      Terrores.add("semantico", 'expresion no valida ' + expresultion.tipo + ': ' + expresultion.valor, expresultion.linea, expresultion.columna);
    }
}

export const ejecutar = _main;
