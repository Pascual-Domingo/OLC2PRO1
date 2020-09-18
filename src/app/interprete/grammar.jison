 
 /* segmento de codigo, es equivalente a la seccion parseCode que encontramos en CUP */
 /* aca podemos importar los módulos que vamos a utilizar, crear funciones, etc */
%{
	const TIPO_VALOR 		= require('./instrucciones').TIPO_VALOR;
	const TIPO_DATO			= require('./tabla_simbolos').TIPO_DATO; //para jalar el tipo de dato
	const TIPO_OPERACION	= require('./instrucciones').TIPO_OPERACION;
	const instruccionesAPI	= require('./instrucciones').instruccionesAPI;
%}

/*directivas léxicas y expresultiones regularesult | tokens */
%lex
%options flex case-insensitive
%option yylineno
%locations

/*expresultion regular*/
number [0-9]+  				//enteros
decimal [0-9]+("."[0-9]+) 	//decimal
cadena1 \"[^\"]*\"			//cadena
cadena2 \'[^\"]*\'			//cadena
cadena3 \`[^\"]*\`			//caden
identificador ([a-zA-Z])[a-zA-Z0-9_]*	 
booleano "true" | "false"

mas 			"+"
menos 			"-"
por 			"*"
div 			"/"
exponente		"**"
modular			"%"
parA 			"("
parC 			")"
llaveA			"{"
llaveC			"}"
ptcoma			";"
dospt			":"
coma			","
mayque			">"
menque			"<"
igual 			"="
not				"!"
mayigque		">="
menigque		"<="
igig			"=="
noig			"!="
and 			"&&"
or				"||"



tif				"if"
timprimir		"console.log"
tLet			"let"
tConst			"const"
tString			"string"
tNumber			"number"
tBoolean		"boolean"


%x INITIAL
%%

<INITIAL>{not}				%{ return 'not'; %}
<INITIAL>{mas}				%{ return 'mas'; %}
<INITIAL>{menos}			%{ return 'menos'; %}
<INITIAL>{por}				%{ return 'por'; %}
<INITIAL>{div}				%{ return 'div'; %}
<INITIAL>{parA}				%{ return 'parA'; %}
<INITIAL>{parC}				%{ return 'parC'; %}
<INITIAL>{llaveA}			%{ return 'llaveA'; %}
<INITIAL>{llaveC}			%{ return 'llaveC'; %}
<INITIAL>{ptcoma}			%{ return 'ptcoma'; %}
<INITIAL>{mayque}			%{ return 'mayque'; %}
<INITIAL>{menque}			%{ return 'menque'; %}
<INITIAL>{mayigque}			%{ return 'mayigque'; %}
<INITIAL>{menigque}			%{ return 'menigque'; %}
<INITIAL>{igual}			%{ return 'igual'; %}
<INITIAL>{igig}				%{ return 'igig'; %}
<INITIAL>{noig}				%{ return 'noig'; %}
<INITIAL>{modular}			%{ return 'modular'; %}
<INITIAL>{exponente}		%{ return 'exponente'; %}
<INITIAL>{dospt}			%{ return 'dospt'; %}
<INITIAL>{coma}				%{ return 'coma'; %}
<INITIAL>{and}				%{ return 'and'; %}
<INITIAL>{or}				%{ return 'or'; %}

<INITIAL>{tString}			%{ return 'tString'; %}
<INITIAL>{tNumber}			%{ return 'tNumber'; %}
<INITIAL>{tBoolean}			%{ return 'tBoolean'; %}
<INITIAL>{tif}				%{ return 'tif'; %}
<INITIAL>{timprimir}		%{ return 'timprimir'; %}
<INITIAL>{tLet}				%{ return 'tLet'; %}
<INITIAL>{tConst}			%{ return 'tConst'; %}

<INITIAL>{booleano}			%{ return 'booleano'; %}
<INITIAL>{decimal}			%{ return 'decimal'; %}
<INITIAL>{number}			%{ return 'entero'; %}
<INITIAL>{identificador}			%{ return 'identificador'; %}
<INITIAL>{cadena1}					%{ yytext = yytext.substr(1,yyleng-2); return 'cadena1'; %}
<INITIAL>{cadena2}					%{ yytext = yytext.substr(1,yyleng-2); return 'cadena2'; %}
<INITIAL>{cadena3}					%{ yytext = yytext.substr(1,yyleng-2); return 'cadena3'; %}



\s+                   						/* skip whitespace */
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas
"\t"	{ }
"\n"  	{ }

<<EOF>>		          return 'EOF' //fin de cadena

/lex

/*asociatividad y precedencia para los operadores*/
%left or
%left and
%left not
%left mayque menque mayigque menigque igig noig
%left mas menos
%left por div modular
%left exponente
%left parA parC
%left UMENOS

/*inicio de la definicion de la gramática*/
%start Init  //simbolo inicial de la gramatica es Init

%%

Init: LINSTRUCCIONES EOF { return $1; };

LINSTRUCCIONES
	: LINSTRUCCIONES INSTRUCCION	{ $1.push($2); $$ = $1; }
	| INSTRUCCION					{ $$ = [$1]; }
	;

INSTRUCCION
		: timprimir parA EXP_LOGICA parC ptcoma					{ $$ = instruccionesAPI.nuevoImprimir($3, this._$.first_line, this._$.first_column ); }
		| tif parA EXP_LOGICA parC llaveA INSTRUCCION llaveC	{ $$ = instruccionesAPI.nuevoIf($3, $6); }
		| VARIABLES												{ $$ = $1; }
		| error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
		;

VARIABLES
	: tLet LISTA_ID ptcoma												{ $$ = instruccionesAPI.nuevoVariable($1, $2); }
	| identificador igual EXP_LOGICA ptcoma 							{ $$ = instruccionesAPI.nuevoVariable(undefined, [instruccionesAPI.nuevoAsignacion($1, $3, this._$.first_line, this._$.first_column)]); }
	| tConst identificador igual EXP_LOGICA ptcoma 						{ $$ = instruccionesAPI.nuevoVariable($1, [instruccionesAPI.nuevoDeclaracionAsignacion($2, undefined, $4, this._$.first_line, this._$.first_column)]); }
	| tConst identificador dospt TIPO_VARIABLE igual EXP_LOGICA ptcoma 	{ $$ = instruccionesAPI.nuevoVariable($1, [instruccionesAPI.nuevoDeclaracionAsignacion($2, $4, $6, this._$.first_line, this._$.first_column)]); }
	;

LISTA_ID
	: LISTA_ID coma IDENT	{ $1.push($3); $$ = $1; }
	| IDENT					{ $$ = [$1]; }
	;

IDENT
	: identificador											{ $$ = instruccionesAPI.nuevoDeclaracion($1, undefined, this._$.first_line, this._$.first_column); }
	| identificador dospt TIPO_VARIABLE						{ $$ = instruccionesAPI.nuevoDeclaracion($1, $3, this._$.first_line, this._$.first_column); }
	| identificador igual EXP_LOGICA						{ $$ = instruccionesAPI.nuevoDeclaracionAsignacion($1, undefined, $3, this._$.first_line, this._$.first_column); }
	| identificador dospt TIPO_VARIABLE igual EXP_LOGICA	{ $$ = instruccionesAPI.nuevoDeclaracionAsignacion($1, $3, $5, this._$.first_line, this._$.first_column); }
	;

EXP
	: EXP mas EXP				{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.SUMA, this._$.first_line, this._$.first_column); }
	| EXP menos EXP 			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.RESTA, this._$.first_line, this._$.first_column); }
	| EXP por EXP 				{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MULTIPLICACION, this._$.first_line, this._$.first_column); }
	| EXP div EXP 				{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.DIVISION, this._$.first_line, this._$.first_column); }
	| EXP modular EXP			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MODULAR, this._$.first_line, this._$.first_column); }
	| EXP exponente EXP			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.EXPONENTE, this._$.first_line, this._$.first_column); }
	| menos EXP %prec UMENOS	{ $$ = instruccionesAPI.nuevoOperacionUnaria($2, TIPO_OPERACION.NEGATIVO, this._$.first_line, this._$.first_column); }
    | entero 					{ $$ = instruccionesAPI.nuevoValor(Number($1), TIPO_VALOR.NUMERO, this._$.first_line, this._$.first_column); }
	| decimal 					{ $$ = instruccionesAPI.nuevoValor(Number($1), TIPO_VALOR.NUMERO, this._$.first_line, this._$.first_column); }
	| cadena1					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA, this._$.first_line, this._$.first_column); }
	| cadena2					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA, this._$.first_line, this._$.first_column); }
	| cadena3					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA, this._$.first_line, this._$.first_column); }
	| booleano					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.BOOLEANO, this._$.first_line, this._$.first_column); }
	| identificador				{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.IDENTIFICADOR, this._$.first_line, this._$.first_column); }
	| parA EXP_LOGICA parC 		{ $$ = $2; }
	;
/*
EXP_CADENA
	: EXP_CADENA mas EXP_CADENA	{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.CONCATENACION); }
	| cadena1					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA); }
	| cadena2					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA); }
	| EXP						{ $$ = $1; }
	;
*/	

EXP_RELACIONAL
	: EXP_RELACIONAL mayque EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MAYOR_QUE, this._$.first_line, this._$.first_column); }
	| EXP_RELACIONAL menque EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MENOR_QUE, this._$.first_line, this._$.first_column); }
	| EXP_RELACIONAL mayigque EXP_RELACIONAL		{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MAYOR_IGUAL, this._$.first_line, this._$.first_column); }
	| EXP_RELACIONAL menigque EXP_RELACIONAL		{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MENOR_IGUAL, this._$.first_line, this._$.first_column); }
	| EXP_RELACIONAL igig EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.DOBLE_IGUAL, this._$.first_line, this._$.first_column); }
	| EXP_RELACIONAL noig EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.NO_IGUAL, this._$.first_line, this._$.first_column); }
	| EXP											{ $$ = $1; }			
	;

EXP_LOGICA
	: EXP_LOGICA and EXP_LOGICA     { $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.AND, this._$.first_line, this._$.first_column); }
	| EXP_LOGICA or EXP_LOGICA 		{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.OR, this._$.first_line, this._$.first_column); }
	| not EXP_LOGICA				{ $$ = instruccionesAPI.nuevoOperacionUnaria($2, TIPO_OPERACION.NOT, this._$.first_line, this._$.first_column); }
	| EXP_RELACIONAL				{ $$ = $1; }
	;

TIPO_VARIABLE
	: tString		{ $$ = TIPO_DATO.STRING; }
	| tNumber		{ $$ = TIPO_DATO.NUMERO; }
	| tBoolean		{ $$ = TIPO_DATO.BOOLENO; }
	| identificador	{ $$ = TIPO_DATO.IDENTIFICADOR; }
	;
