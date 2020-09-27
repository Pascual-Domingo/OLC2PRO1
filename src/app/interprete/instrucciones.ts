
//ng build --base--href https://Pascual-Domingo.github.io/OLC2PRO1/
//jcarlosmaeda@gmail.com
let errorSemantico = [];



// Constantes para los tipos de 'valoresult' que reconoce nuestra gramática.
const tIPO_VALOR = {
	NUMERO:         'VAL_NUMERO',
	IDENTIFICADOR:  'VAL_IDENTIFICADOR',
	CADENA:         'VAL_CADENA',
	BOOLEANO:		'VAL_BOOLEANO',
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

	CONCATENACION:  'OP_CONCATENACION',
	TRANSFERIR:		'TRANSFERIR',
};

// Constantes para los tipos de 'instrucciones' válidas en nuestra gramática.
const tIPO_INSTRUCCION = {
	IMPRIMIR:		'INSTR_IMPRIMIR',
	INS_WHILE:		'INSTR_WHILE',
	INS_DOWHILE:	'INSTR_DOWHILE',
	DECLARACION:	'INSTR_DECLARACION',
	ASIGNACION:		'INSTR_ASIGANCION',
	IF:				'INSTR_IF',
	IF_ELSE:		'IF_ELSE',
	ELSEIF:			'ELSEIF',
	INS_FOR: 			'INST_FOR',
	SWITCH:			'SWITCH',
	SWITCH_OP:		'SWITCH_OP',
	SWITCH_DEF:		'SWITCH_DEF',
	ASIGNACION_DECLARADA: 'ASIGNACION_DECLARADA',
	VARIABLE: 		'VARIABLE',
	FUNCION: 		'FUNCION',
	CUERPO:			'CUERPO',
	LLAMADA:		'LLAMADA',
	TRANSFERIR:		'TRANSFERIR',
	MASMAS:			'MASMAS',
	MENOSMENOS:		'MENOSMENOS',
	TERNARIO:		'INS_TERNARIO',
	VAR_TERNARIO:	'VAR_TERNARIO',
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
function nuevaOperacion(operandoIzq, operandoDer, tipo, linea, columna) {
	return {
		operandoIzq: operandoIzq,
		operandoDer: operandoDer,
		tipo: tipo,
		linea: linea,
		columna: columna
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
	nuevoOperacionBinaria: function(operandoIzq, operandoDer, tipo, linea, columna) {
		return nuevaOperacion(operandoIzq, operandoDer, tipo, linea, columna);
	},

	/**
	 * Crea un nuevo objeto tipo Operación para las operaciones unarias válidas
	 * @param {*} operando 
	 * @param {*} tipo 
	 */
	nuevoOperacionUnaria: function(operando, tipo, linea, columna) {
		return nuevaOperacion(operando, undefined, tipo, linea, columna);
	},

	/**
	 * Crea un nuevo objeto tipo Valor, esto puede ser una cadena, un número o un identificador
	 * @param {*} valor 
	 * @param {*} tipo 
	 */
	nuevoValor: function(valor, tipo, linea, columna) {
		return {
			tipo: tipo,
			valor: valor,
			linea: linea,
			columna: columna
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Imprimir.
	 * @param {*} expresultionCadena 
	 */
	nuevoImprimir: function(expresultionCadena, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.IMPRIMIR,
			expresion: expresultionCadena,
			linea: linea,
			columna: columna
		};
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Mientras.
	 * @param {*} expresultionLogica 
	 * @param {*} instrucciones 
	 */
	nuevoWhile: function(expresultionLogica, instrucciones, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.INS_WHILE,
			expresion: expresultionLogica,
			instruccion: instrucciones,
			linea: linea,
			columna: columna
		};
	},

	nuevoDoWhile: function(instrucciones, expresultionLogica, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.INS_DOWHILE,
			expresion: expresultionLogica,
			instruccion: instrucciones,
			linea: linea,
			columna: columna
		};
	},

	/**
	 * Crea un objeto tipo instrucción para la sentencia Para.
	 * @param {*} expresultionLogica
	 * @param {*} instrucciones
	 * @param {*} aumento
	 * @param {*} decremento
	 */
	nuevoFor: function (variable, expresultionLogica, aumento, instrucciones, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.INS_FOR,
			expresionlogica: expresultionLogica,
			instruccion: instrucciones,
			aumento: aumento,
			variable: variable,
			linea: linea,
			columna: columna
		}
	},


	nuevoVariable(tipo_decla, ids){
		return {
			tipo:tIPO_INSTRUCCION.VARIABLE,
			tipo_declaracion: tipo_decla,
			lsID: ids
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Declaración.
	 * @param {*} identificador 
	 */
	nuevoDeclaracion: function(identificador, tipo, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.DECLARACION,
			tipo_declaracion: undefined,
			identificador: identificador,
			tipo_variable: tipo,
			linea: linea,
			columna: columna
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia Asignación.
	 * @param {*} identificador 
	 * @param {*} expresultionNumerica 
	 */
	nuevoAsignacion: function(identificador, expresultionNumerica, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.ASIGNACION,
			identificador: identificador,
			expresion: expresultionNumerica,
			linea: linea,
			columna: columna
		}
	},
	nuevoDeclaracionAsignacion: function(identificador, tipo, expresultionNumerica, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.ASIGNACION_DECLARADA,
			tipo_declaracion: undefined,
			identificador: identificador,
			expresion: expresultionNumerica,
			tipo_variable: tipo,
			linea: linea,
			columna: columna
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia If.
	 * @param {*} expresultionLogica 
	 * @param {*} instrucciones 
	 */
	nuevoIf: function(expresultionLogica, instrucciones, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.IF,
			expresion: expresultionLogica,
			instrucciones: instrucciones,
			linea: linea,
			columna: columna
		}
	},

	/**
	 * Crea un objeto tipo Instrucción para la sentencia If-Else.
	 * @param {*} expresultionLogica 
	 * @param {*} instruccionesIfVerdadero 
	 * @param {*} instruccionesIfFalso 
	 */
	nuevoIfElse: function(instruccionesIfVerdadero, instruccionesIfFalso, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.IF_ELSE,
			instruccionIf: instruccionesIfVerdadero,
			instruccionElse: instruccionesIfFalso,
			linea: linea,
			columna: columna
		}
	},

	nuevoElseIf(miIf, elseif, mielse, linea, columna){
		return{
			tipo: tIPO_INSTRUCCION.ELSEIF,
			instruccionIf: miIf,
			instruccionElseIf: elseif,
			instruccionElse: mielse,
			linea: linea,
			columna: columna
		}
	},
  
	/**
	 * Crea un objeto tipo Instrucción para la sentencia Switch.
	 * @param {*} expresultionNumerica 
	 * @param {*} instrucciones 
	 */
	nuevoSwitch: function(expresultionNumerica, casos, linea, columna) {
		return {
			tipo: TIPO_INSTRUCCION.SWITCH,
			expresion: expresultionNumerica,
			casos: casos,
			linea: linea,
			columna: columna
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
	nuevoCaso: function(expresultionNumerica, instrucciones, linea, columna) {
		return {
			tipo: TIPO_OPCION_SWITCH.CASO,
			expresion: expresultionNumerica,
			instrucciones: instrucciones,
			linea: linea,
			columna: columna
		}
	},
	/**
	 * Crea un objeto tipo OPCION_SWITCH para un CASO DEFECTO de la sentencia switch.
	 * @param {*} instrucciones 
	 */
	nuevoCasoDef: function(instrucciones, linea, columna) {
		return {
			tipo: TIPO_OPCION_SWITCH.DEFECTO,
			instrucciones: instrucciones,
			linea: linea,
			columna: columna
		}
	},
    
	/**
	* Crea un objeto tipo Operador (+ , - , / , *) 
	* @param {*} operador 
	*/
	nuevoOperador: function(operador){
		return operador 
	},

	nuevoParametro(id, tipo, linea, columna){
		return {
			identificador: id,
			tipo: tipo,
			linea: linea,
			columna:columna
		}
	},

	nuevoFuncion(funcion, id, parametro, tipo, instruccion, linea, columna){
		return {
			tipo: tIPO_INSTRUCCION.FUNCION,
			tipo_declaracion: funcion,
			identificador: id,
			parametro: parametro,
			tipo_variable: tipo,
			valor: instruccion,
			linea: linea,
			columna: columna
		}
	},

	nuevoLlamada(identificador, parametro, linea, columna){
		return {
			tipo: tIPO_INSTRUCCION.LLAMADA,
			identificador: identificador,
			parametro: parametro,
			linea: linea,
			columna: columna
		}
	},

	nuevoCuerpo(opIz, opDer){
		return{
			tipo: tIPO_INSTRUCCION.CUERPO,
			izquierda: opIz,
			derecha: opDer
		}
	},

	nuevoTransferencia(val, exp, linea, columna){
		return{
			tipo: tIPO_INSTRUCCION.TRANSFERIR,
			valor: val,
			expresion: exp,
			linea: linea,
			columna: columna
		}
	},

	nuevoMasmas(id, linea, columna){
		return{
			tipo: tIPO_INSTRUCCION.MASMAS,
			identificador: id,
			linea: linea,
			columna: columna
		}
	},

	nuevoMenosmenos(id, linea, columna){
		return{
			tipo: tIPO_INSTRUCCION.MENOSMENOS,
			identificador: id,
			linea: linea,
			columna: columna
		}
	},

	nuevoTernario(logico, primero, segundo, linea, columna){
		return{
			tipo: tIPO_INSTRUCCION.TERNARIO,
			expresionLogico: logico,
			instruccionVerdadero: primero,
			instruccionFalso: segundo,
			linea: linea,
			columna: columna
		};
	}

 
	
}
// Exportamos nuestras constantes y nuestra API


export const TIPO_OPERACION = tIPO_OPERACION;
export const TIPO_INSTRUCCION = tIPO_INSTRUCCION;
export const TIPO_VALOR = tIPO_VALOR;
export const instruccionesAPI = InstruccionesAPI;
export const TIPO_OPCION_SWITCH = tIPO_OPCION_SWITCH;
