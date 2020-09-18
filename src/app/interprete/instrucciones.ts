/*
function pr2(a, b) {  
    return a + b;
  }

export const prb = pr2;

*/


// Constantes para los tipos de 'valoresult' que reconoce nuestra gramática.
const tIPO_VALOR = {
	NUMERO:         'VAL_NUMERO',
	IDENTIFICADOR:  'VAL_IDENTIFICADOR',
	CADENA:         'VAL_CADENA',
}

// Constantes para los tipos de 'operaciones' que soporta nuestra gramática.
const tIPO_OPERACION = {
	SUMA:           'OP_SUMA',
	RESTA:          'OP_RESTA',
	MULTIPLICACION: 'OP_MULTIPLICACION',
	DIVISION:       'OP_DIVISION',
	MODULAR:		'MODULAR',
	EXPONENTE:		'OP_EXPONENTE',
	NEGATIVO:       'OP_NEGATIVO',
	MAYOR_QUE:      'OP_MAYOR_QUE',
	MENOR_QUE:      'OP_MENOR_QUE',

	MAYOR_IGUAL: 	'OP_MAYOR_IGUAL',
	MENOR_IGUAL:    'OP_MENOR_IGUAL',
	DOBLE_IGUAL:    'OP_DOBLE_IGUAL',
	NO_IGUAL:    	'OP_NO_IGUAL',

	AND:  			'OP_AND',
	OR: 			'OP_OR',
	NOT:   			'OP_NOT',  	

	CONCATENACION:  'OP_CONCATENACION'
};

// Constantes para los tipos de 'instrucciones' válidas en nuestra gramática.
const tIPO_INSTRUCCION = {
	IMPRIMIR:		'INSTR_IMPRIMIR',
	MIENTRAS:		'INSTR_MIENTRAS',
	DECLARACION:	'INSTR_DECLARACION',
	ASIGNACION:		'INSTR_ASIGANCION',
	IF:				'INSTR_IF',
	IF_ELSE:		'INSTR_ELSE',
	PARA: 			'INST_PARA',
	SWITCH:			'SWITCH',
	SWITCH_OP:		'SWITCH_OP',
	SWITCH_DEF:		'SWITCH_DEF',
	ASIGNACION_SIMPLIFICADA: 'ASIGNACION_SIMPLIFICADA'
}

// Constantes para los tipos de OPCION_SWITCH validas en la gramática
const tIPO_OPCION_SWITCH = { 
	CASO: 			'CASO',
	DEFECTO: 		'DEFECTO'
} 

/**
 * Esta función se encarga de crear objetos tipo Operación.
 * Recibe como parámetros el operando izquierdo y el operando derecho.
 * También recibe como parámetro el tipo del operador
 * @param {*} operandoIzq 
 * @param {*} operandoDer 
 * @param {*} tipo 
 */
function nuevaOperacion(operandoIzq, operandoDer, tipo) {
	return {
		operandoIzq: operandoIzq,
		operandoDer: operandoDer,
		tipo: tipo
	}
}


/**
 * El objetivo de esta API es proveer las funciones necesarias para la construcción de operaciones e instrucciones.
 */
const InstruccionesAPI = {

	/**
	 * Crea un nuevo objeto tipo Operación para las operaciones binarias válidas.
	 * @param {*} operandoIzq 
	 * @param {*} operandoDer 
	 * @param {*} tipo 
	 */
	nuevoOperacionBinaria: function(operandoIzq, operandoDer, tipo) {
		return nuevaOperacion(operandoIzq, operandoDer, tipo);
	},

	/**
	 * Crea un nuevo objeto tipo Operación para las operaciones unarias válidas
	 * @param {*} operando 
	 * @param {*} tipo 
	 */
	nuevoOperacionUnaria: function(operando, tipo) {
		return nuevaOperacion(operando, undefined, tipo);
	},

	/**
	 * Crea un nuevo objeto tipo Valor, esto puede ser una cadena, un número o un identificador
	 * @param {*} valor 
	 * @param {*} tipo 
	 */
	nuevoValor: function(valor, tipo) {
		return {
			tipo: tipo,
			valor: valor
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Imprimir.
	 * @param {*} expresultionCadena 
	 */
	nuevoImprimir: function(expresultionCadena) {
		return {
			tipo: TIPO_INSTRUCCION.IMPRIMIR,
			expresultionCadena: expresultionCadena
		};
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Mientras.
	 * @param {*} expresultionLogica 
	 * @param {*} instrucciones 
	 */
	nuevoMientras: function(expresultionLogica, instrucciones) {
		return {
			tipo: TIPO_INSTRUCCION.MIENTRAS,
			expresultionLogica: expresultionLogica,
			instrucciones: instrucciones
		};
	},

	/**
	 * Crea un objeto tipo instrucción para la sentencia Para.
	 * @param {*} expresultionLogica
	 * @param {*} instrucciones
	 * @param {*} aumento
	 * @param {*} decremento
	 */
	nuevoPara: function (variable, valorVariable, expresultionLogica, aumento, instrucciones) {
		return {
			tipo: TIPO_INSTRUCCION.PARA,
			expresultionLogica: expresultionLogica,
			instrucciones: instrucciones,
			aumento: aumento,
			variable: variable,
			valorVariable: valorVariable
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Declaración.
	 * @param {*} identificador 
	 */
	nuevoDeclaracion: function(identificador, tipo) {
		return {
			tipo: TIPO_INSTRUCCION.DECLARACION,
			identificador: identificador,
			tipo_dato: tipo
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Asignación.
	 * @param {*} identificador 
	 * @param {*} expresultionNumerica 
	 */
	nuevoAsignacion: function(identificador, expresultionNumerica) {
		return {
			tipo: TIPO_INSTRUCCION.ASIGNACION,
			identificador: identificador,
			expresultionNumerica: expresultionNumerica
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia If.
	 * @param {*} expresultionLogica 
	 * @param {*} instrucciones 
	 */
	nuevoIf: function(expresultionLogica, instrucciones) {
		return {
			tipo: TIPO_INSTRUCCION.IF,
			expresultionLogica: expresultionLogica,
			instrucciones: instrucciones
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia If-Else.
	 * @param {*} expresultionLogica 
	 * @param {*} instruccionesIfVerdadero 
	 * @param {*} instruccionesIfFalso 
	 */
	nuevoIfElse: function(expresultionLogica, instruccionesIfVerdadero, instruccionesIfFalso) {
		return {
			tipo: TIPO_INSTRUCCION.IF_ELSE,
			expresultionLogica: expresultionLogica,
			instruccionesIfVerdadero: instruccionesIfVerdadero,
			instruccionesIfFalso: instruccionesIfFalso
		}
	},
  
	/**
	 * Crea un objeto tipo Instrucción para la sentencia Switch.
	 * @param {*} expresultionNumerica 
	 * @param {*} instrucciones 
	 */
	nuevoSwitch: function(expresultionNumerica, casos) {
		return {
			tipo: TIPO_INSTRUCCION.SWITCH,
			expresultionNumerica: expresultionNumerica,
			casos: casos
		}
	},

	/**
	 * Crea una lista de casos para la sentencia Switch.
	 * @param {*} caso 
	 */
	nuevoListaCasos: function (caso) {
		var casos = []; 
		casos.push(caso);
		return casos;
	},

	/**
	 * Crea un objeto tipo OPCION_SWITCH para una CASO de la sentencia switch.
	 * @param {*} expresultionNumerica 
	 * @param {*} instrucciones 
	 */
	nuevoCaso: function(expresultionNumerica, instrucciones) {
		return {
			tipo: TIPO_OPCION_SWITCH.CASO,
			expresultionNumerica: expresultionNumerica,
			instrucciones: instrucciones
		}
	},
	/**
	 * Crea un objeto tipo OPCION_SWITCH para un CASO DEFECTO de la sentencia switch.
	 * @param {*} instrucciones 
	 */
	nuevoCasoDef: function(instrucciones) {
		return {
			tipo: TIPO_OPCION_SWITCH.DEFECTO,
			instrucciones: instrucciones
		}
	},
    
	/**
	* Crea un objeto tipo Operador (+ , - , / , *) 
	* @param {*} operador 
	*/
	nuevoOperador: function(operador){
		return operador 
	},
 
	/**
	 * Crea un objeto tipo Instrucción para la sentencia Asignacion con Operador
	 * @param {*} identificador 
	 * @param {*} operador 
	 * @param {*} expresultionCadena 
	 */
	nuevoAsignacionSimplificada: function(identificador, operador , expresultionNumerica){
		return{
			tipo: TIPO_INSTRUCCION.ASIGNACION_SIMPLIFICADA,
			operador : operador,
			expresultionNumerica: expresultionNumerica,
			identificador : identificador
		} 
	}
}
// Exportamos nuestras constantes y nuestra API


export const TIPO_OPERACION = tIPO_OPERACION;
export const TIPO_INSTRUCCION = tIPO_INSTRUCCION;
export const TIPO_VALOR = tIPO_VALOR;
export const instruccionesAPI = InstruccionesAPI;
export const TIPO_OPCION_SWITCH = tIPO_OPCION_SWITCH;
