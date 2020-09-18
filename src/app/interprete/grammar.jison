 
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
mayque			">"
menque			"<"
mayigque		">="
menigque		"<="
igig			"=="
noig			"!="
not				"!"


tif				"if"
timprimir		"console.log"
ttrue			"true"


%x INITIAL
%%

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
<INITIAL>{igig}				%{ return 'igig'; %}
<INITIAL>{noig}				%{ return 'noig'; %}
<INITIAL>{not}				%{ return 'not'; %}
<INITIAL>{modular}			%{ return 'modular'; %}
<INITIAL>{exponente}		%{ return 'exponente'; %}

<INITIAL>{tif}				%{ return 'tif'; %}
<INITIAL>{timprimir}		%{ return 'timprimir'; %}
<INITIAL>{ttrue}			%{ return 'ttrue'; %}

<INITIAL>{decimal}			%{ return 'decimal'; %}
<INITIAL>{number}			%{ return 'entero'; %}
<INITIAL>{cadena1}			%{ yytext = yytext.substr(1,yyleng-2); return 'cadena1'; %}
<INITIAL>{cadena2}			%{ yytext = yytext.substr(1,yyleng-2); return 'cadena2'; %}
<INITIAL>{cadena3}			%{ yytext = yytext.substr(1,yyleng-2); return 'cadena3'; %}



\s+                   						/* skip whitespace */
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas

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

Init: EXP_LOGICA EOF { return $1; };

LINSTRUCCIONES
	: LINSTRUCCIONES INSTRUCCION	{ $1.push($2); $$ = S1; }
	| INSTRUCCION					{ $$ = [S1]; }
	;

INSTRUCCION
		: timprimir parA EXP parC ptcoma					{ $$ = instruccionesAPI.nuevoImprimir($3); }
		| tif parA EXP_LOGICA parC llaveA INSTRUCCION llaveC	{ $$ = instruccionesAPI.nuevoIf($3, $6); }
		;

EXP
	: EXP mas EXP				{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.SUMA); }
	| EXP menos EXP 			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.RESTA); }
	| EXP por EXP 				{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MULTIPLICACION); }
	| EXP div EXP 				{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.DIVISION); }
	| EXP modular EXP			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MODULAR); }
	| EXP exponente EXP			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.EXPONENTE); }
	| menos EXP %prec UMENOS	{ $$ = instruccionesAPI.nuevoOperacionUnaria($2, TIPO_OPERACION.NEGATIVO); }
    | entero 					{ $$ = instruccionesAPI.nuevoValor(Number($1), TIPO_VALOR.NUMERO); }
	| decimal 					{ $$ = instruccionesAPI.nuevoValor(Number($1), TIPO_VALOR.NUMERO); }
	| cadena1					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA); }
	| cadena2					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA); }
	| cadena3					{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.CADENA); }
	| parA EXP parC 			{ $$ = $2; }
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
	: EXP_RELACIONAL mayque EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MAYOR_QUE); }
	| EXP_RELACIONAL menque EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MENOR_QUE); }
	| EXP_RELACIONAL mayigque EXP_RELACIONAL		{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MAYOR_IGUAL); }
	| EXP_RELACIONAL menigque EXP_RELACIONAL		{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.MENOR_IGUAL); }
	| EXP_RELACIONAL igig EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.DOBLE_IGUAL); }
	| EXP_RELACIONAL noig EXP_RELACIONAL			{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.NO_IGUAL); }
	| EXP											{ $$ = $1; }			
	;

EXP_LOGICA
	: EXP_LOGICA and EXP_LOGICA     { $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.AND); }
	| EXP_LOGICA or EXP_LOGICA 		{ $$ = instruccionesAPI.nuevoOperacionBinaria($1, $3, TIPO_OPERACION.OR); }
	| not EXP_LOGICA				{ $$ = instruccionesAPI.nuevoOperacionUnaria($2, TIPO_OPERACION.NOT); }
	| EXP_RELACIONAL				{ $$ = $1; }
	| ttrue
	;
