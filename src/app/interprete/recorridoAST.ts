import { TIPO_OPERACION, TIPO_VALOR, TIPO_INSTRUCCION } from './instrucciones';
import { TIPO_DATO } from './tabla_simbolos';

//const tsGlobal = new TS([]);

function _main(AST: any) {
  return recorrerAST(AST);
}

function recorrerAST(instrucciones: any) {
  console.log(instrucciones);
  return procesarExpresultionNumerica(instrucciones).valor;

}


function procesarExpresultionNumerica(expresultion: any) {
  if (expresultion.tipo === TIPO_OPERACION.NEGATIVO) {
    // Es un valor negado.
    // En este caso necesitamos procesar el valor del operando para poder negar su valor.
    // Para esto invocamos (recursivamente) esta función para sesolver el valor del operando.
    const valor = procesarExpresultionNumerica(expresultion.operandoIzq).valor;     // resultolvemos el operando
    const result = valor * -1;  // Retornamos el valor negado.
    return { valor: result, tipo: TIPO_DATO.NUMERO };
  } else
    if (expresultion.tipo == TIPO_OPERACION.SUMA
      || expresultion.tipo === TIPO_OPERACION.RESTA
      || expresultion.tipo === TIPO_OPERACION.MULTIPLICACION
      || expresultion.tipo === TIPO_OPERACION.DIVISION
      || expresultion.tipo === TIPO_OPERACION.EXPONENTE
      || expresultion.tipo === TIPO_OPERACION.MODULAR) {
      console.log(expresultion);
      //console.log(sumar);
      let valorIzq = procesarExpresultionNumerica(expresultion.operandoIzq);      // resultolvemos el operando izquierdo.
      let valorDer = procesarExpresultionNumerica(expresultion.operandoDer);      // resultolvemos el operando derecho.

      if (valorIzq.tipo !== TIPO_DATO.NUMERO || valorDer.tipo !== TIPO_DATO.NUMERO) {
        throw 'ERROR: se esperaban expresultiones numericas para ejecutar la: ' + expresultion.tipo;
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
      if(expresultion.tipo === TIPO_OPERACION.MODULAR){
        const result = valorIzq % valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.DIVISION) {
        if (valorDer === 0) {
          throw 'ERROR: la division entre 0 da como resultultado: ' + valorIzq / valorDer;
        } else {
          const result = valorIzq / valorDer;
          return { valor: result, tipo: TIPO_DATO.NUMERO };
        }
      }
      if(expresultion.tipo === TIPO_OPERACION.EXPONENTE){
        const resultult = Math.pow(valorIzq, valorDer);
        return { valor: resultult, tipo: TIPO_DATO.NUMERO };
      }

    } else if (expresultion.tipo == TIPO_VALOR.NUMERO) {
      // Es un valor numérico.
      // En este caso únicamente retornamos el valor obtenido por el parser directamente.
      return { valor: expresultion.valor, tipo: TIPO_DATO.NUMERO }
    } else if (expresultion.tipo === TIPO_VALOR.IDENTIFICADOR) {
      // Es un identificador.
      // Obtenemos el valor de la tabla de simbolos
      //const sym = tablaDeSimbolos.obtener(expresultion.valor);
      //return {valor: sym.valor, tipo: sym.tipo};
    } else {
      throw 'ERROR: expresultión numérica no válida: ' + expresultion;
    }
}

export const ejecutar = _main;
