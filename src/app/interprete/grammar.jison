 
 /* segmento de codigo, es equivalente a la seccion parseCode que encontramos en CUP */
 /* aca podemos importar los módulos que vamos a utilizar, crear funciones, etc */
%{
	//import { TE } from './tabla_errores';
	const TIPO_VALOR 		= require('./instrucciones').TIPO_VALOR;
	const TIPO_DATO			= require('./tabla_simbolos').TIPO_DATO; //para jalar el tipo de dato
	const TIPO_OPERACION	= require('./instrucciones').TIPO_OPERACION;
	const instruccionesAPI	= require('./instrucciones').instruccionesAPI;
	const { SINTACTOCO, ERLEXICO } = require('./tabla_errores');

%}

/*directivas léxicas y expresultiones regularesult | tokens */
//%options flex case-insensitive   sensible a mayusculas y minusculas
%lex
%options flex case-sensitive
%option yylineno
%locations

/*expresultion regular*/
number [0-9]+  				//enteros
decimal [0-9]+("."[0-9]+) 	//decimal
cadena1 \"[^\"]*\"			//cadena
cadena2 \'[^\']*\'			//cadena
cadena3 \`[^\`]*\`			//caden
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
punto 			"."
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
masmas			"++"
menosmenos		"--"
interrogacionC	"?"
corchA			"["
corchC			"]"


tDo				"do"
tif				"if"
tElse			"else"
timprimir		"console.log"
tLet			"let"
tConst			"const"
tString			"string"
tNumber			"number"
tBoolean		"boolean"
tFunction		"function"
tVoid			"void"
tContinue		"continue"
tBreak			"break"
tReturn			"return"
tSwitch 		"switch"
tCase			"case"
tDefault		"default"
tWhile			"while"
tFor			"for"
tLength			"length"


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
<INITIAL>{punto}			%{ return 'punto'; %}
<INITIAL>{dospt}			%{ return 'dospt'; %}
<INITIAL>{coma}				%{ return 'coma'; %}
<INITIAL>{and}				%{ return 'and'; %}
<INITIAL>{or}				%{ return 'or'; %}
<INITIAL>{masmas}			%{ return 'masmas'; %}
<INITIAL>{menosmenos}		%{ return 'menosmenos'; %}
<INITIAL>{interrogacionC}	%{ return 'interrogacionC'; %}
<INITIAL>{corchA}			%{ return 'corchA'; %}
<INITIAL>{corchC}			%{ return 'corchC'; %}


<INITIAL>{tDo}				%{ return 'tDo'; %}
<INITIAL>{tString}			%{ return 'tString'; %}
<INITIAL>{tNumber}			%{ return 'tNumber'; %}
<INITIAL>{tBoolean}			%{ return 'tBoolean'; %}
<INITIAL>{tif}				%{ return 'tif'; %}
<INITIAL>{tElse}			%{ return 'tElse'; %}
<INITIAL>{timprimir}		%{ return 'timprimir'; %}
<INITIAL>{tLet}				%{ return 'tLet'; %}
<INITIAL>{tConst}			%{ return 'tConst'; %}
<INITIAL>{tFunction}		%{ return 'tFunction'; %}
<INITIAL>{tVoid}			%{ return 'tVoid'; %}
<INITIAL>{tReturn}			%{ return 'tReturn'; %}
<INITIAL>{tContinue}		%{ return 'tContinue'; %}
<INITIAL>{tBreak}			%{ return 'tBreak'; %}
<INITIAL>{tSwitch}			%{ return 'tSwitch'; %}
<INITIAL>{tCase}			%{ return 'tCase'; %}
<INITIAL>{tWhile}			%{ return 'tWhile'; %}
<INITIAL>{tFor}				%{ return 'tFor'; %}
<INITIAL>{tDefault}			%{ return 'tDefault'; %}
<INITIAL>{tLength}			%{ return 'tLength'; %}


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
.			{ 	console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); 
				new ERLEXICO('Este es un error léxico', yytext, yylloc.first_line, yylloc.first_column);
			}
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

Init: CUERPO EOF { return $1; };

CUERPO
	: INSTRUCCION CUERPO	{
								var pila = eval('$$');
								$$ = instruccionesAPI.nuevoCuerpo(pila[pila.length-2], pila[pila.length-1]);
							}
	| INSTRUCCION			{
								var pila = eval('$$');
								$$ = instruccionesAPI.nuevoCuerpo(pila[pila.length-1], undefined);
							}
	| error { new SINTACTOCO("este es un error sintactico", yytext, this._$.first_line , this._$.first_column); }
	;

INSTRUCCION
	: FUNCION	{ $$ = $1; }
	| SENTENCIA	{ $$ = {tipo: "INSTRUCCIONES", instruccion: [$1] } }
	;

LSENTENCIA
	: LSENTENCIA SENTENCIA	{ $1.push($2); $$ = $1; }
	| SENTENCIA				{ $$ = [$1]; }
	;

SENTENCIA
		: timprimir parA EXP_LOGICA parC ptcoma							{ $$ = instruccionesAPI.nuevoImprimir($3, this._$.first_line, this._$.first_column ); }
		| timprimir parA EXP_LOGICA coma EXP_LOGICA parC ptcoma			{ $$ = instruccionesAPI.nuevoImprimirArray($3, $5, this._$.first_line, this._$.first_column ); }
		| SENTENCIA_IF									{ $$ = $1; }
		| VARIABLES										{ $$ = $1; }
		| LLAMADA ptcoma								{ $$ = $1; }
		| TRANSFERENCIA ptcoma							{ $$ = $1; }
		| MASMAS_MENOSMENOS ptcoma						{ $$ = $1; }
		| SWITCH 										{ $$ = $1; }
		| INS_WHILE										{ $$ = $1; }
		| INS_DOWHILE									{ $$ = $1; }
		| INS_FOR										{ $$ = $1; }
		| OPERADOR_TERNARIO								{ $$ = $1; }
		| ACCESOARRAY igual EXP_LOGICA ptcoma			{ $$ = instruccionesAPI.nuevoValorArray($1, $3, this._$.first_line , this._$.first_column); }
		| error { //console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
					new SINTACTOCO("este es un error sintactico", yytext, this._$.first_line , this._$.first_column);
				}
		;




INS_FOR
	: tFor parA DECLARACION_FOR EXP_LOGICA ptcoma MASMAS_MENOSMENOS parC llaveA LSENTENCIA llaveC 
	{ $$ = instruccionesAPI.nuevoFor($3,$4,$6,$9, this._$.first_line, this._$.first_column); };

DECLARACION_FOR
	: VARIABLES					{ $$ = $1; }
	| identificador ptcoma		{ $$ = instruccionesAPI.nuevoValor($1, TIPO_VALOR.IDENTIFICADOR, this._$.first_line, this._$.first_column); }
	;

INS_WHILE
	: tWhile parA EXP_LOGICA parC llaveA LSENTENCIA llaveC
	{ $$ = instruccionesAPI.nuevoWhile($3, $6, this._$.first_line, this._$.first_column); };

INS_DOWHILE
	: tDo llaveA LSENTENCIA llaveC tWhile parA EXP_LOGICA parC ptcoma
	{ $$ = instruccionesAPI.nuevoDoWhile($3, $7, this._$.first_line, this._$.first_column); };		

SWITCH
	: tSwitch parA EXP_LOGICA parC llaveA CASOS llaveC 
	{ $$ = instruccionesAPI.nuevoSwitch($3, $6, this._$.first_line, this._$.first_column); };


CASOS 
	: CASOS CASO_EVALUAR 	{ $1.push($2); $$ = $1; }
  	| CASO_EVALUAR			{ $$ = instruccionesAPI.nuevoListaCasos($1);}
;

CASO_EVALUAR 
	: tCase EXP_LOGICA dospt LSENTENCIA { $$ = instruccionesAPI.nuevoCaso($2,$4, this._$.first_line, this._$.first_column); }
  	| tDefault dospt LSENTENCIA { $$ = instruccionesAPI.nuevoCasoDef($3, this._$.first_line, this._$.first_column); }
	;



SENTENCIA_IF
	: IF				{ $$ = $1; }
	| IF ELSE			{ $$ = instruccionesAPI.nuevoIfElse($1, $2, this._$.first_line, this._$.first_column); }
	| IF ELSEIF			{ $$ = instruccionesAPI.nuevoElseIf($1, $2, undefined, this._$.first_line, this._$.first_column); }
	| IF ELSEIF ELSE	{ $$ = instruccionesAPI.nuevoElseIf($1, $2, $3, this._$.first_line, this._$.first_column); }
	;

ELSEIF	
	: ELSEIF  tElse IF	{ $1.push($3); $$ = $1; }
	| tElse IF			{ $$ = [$2]; }
	; 

ELSE : tElse llaveA LSENTENCIA llaveC { $$ = $3; };
IF	: tif parA EXP_LOGICA parC llaveA LSENTENCIA llaveC	
	{ $$ = instruccionesAPI.nuevoIf($3, $6, this._$.first_line, this._$.first_column); } ;


FUNCION
	: tFunction identificador parA PARAM_FUN parC _TIPO_DATO llaveA LSENTENCIA llaveC
	{ $$ = instruccionesAPI.nuevoFuncion($1, $2, $4, $6, $8, this._$.first_line, this._$.first_column);	};

LLAMADA
	: identificador parA PARAM_LLAMADA parC 
	{ $$ = instruccionesAPI.nuevoLlamada($1, $3, this._$.first_line, this._$.first_column); };

PARAM_LLAMADA
	: PARAM_LLAMADA coma EXP_LOGICA	{ $1.push($3); $$ = $1; }
	| EXP_LOGICA					{ $$ = [$1]; }
	|
	;
PARAM_FUN
	: PARAM_FUN coma PARAM	{ $1.push($3); $$ = $1; }
	| PARAM					{ $$ = [$1]; }
	|
	;

PARAM 
	: identificador _TIPO_DATO { $$ = instruccionesAPI.nuevoParametro($1, $2, this._$.first_line, this._$.first_column ); } 
	;


_TIPO_DATO
	: dospt TIPO_VARIABLE 	{ $$ = $2; }
	| dospt tVoid			{ $$ = TIPO_DATO.VOID; }
	|
	;	


OPERADOR_TERNARIO
	: tLet identificador igual TERNARIO ptcoma							{ $$ = instruccionesAPI.nuevoVariable($1, [instruccionesAPI.nuevoDeclaracionAsignacion($2, undefined, $4, this._$.first_line, this._$.first_column)]); }	
	| tLet identificador dospt TIPO_VARIABLE igual TERNARIO ptcoma		{ $$ = instruccionesAPI.nuevoVariable($1, [instruccionesAPI.nuevoDeclaracionAsignacion($2, $4, $6, this._$.first_line, this._$.first_column)]); }
	| tConst identificador igual TERNARIO ptcoma						{ $$ = instruccionesAPI.nuevoVariable($1, [instruccionesAPI.nuevoDeclaracionAsignacion($2, undefined, $4, this._$.first_line, this._$.first_column)]); }
	| tConst identificador dospt TIPO_VARIABLE igual TERNARIO ptcoma	{ $$ = instruccionesAPI.nuevoVariable($1, [instruccionesAPI.nuevoDeclaracionAsignacion($2, $4, $6, this._$.first_line, this._$.first_column)]); }
	| identificador igual TERNARIO ptcoma								{ $$ = instruccionesAPI.nuevoVariable(undefined, [instruccionesAPI.nuevoAsignacion($1, $3, this._$.first_line, this._$.first_column)]); }
	| tReturn TERNARIO ptcoma 											{ $$ = instruccionesAPI.nuevoTransferencia($1, $2, this._$.first_line, this._$.first_column); }
	;
	

TERNARIO
	: EXP_LOGICA interrogacionC EXP_LOGICA dospt EXP_LOGICA
	{ $$ = instruccionesAPI.nuevoTernario($1, $3, $5, this._$.first_line, this._$.first_column); };

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

ASIGARRAY : corchA LISEXP corchC	{ $$ = $2; } ;

LISEXP
	: LISEXP coma EXP_LOGICA	{ $1.push($3); $$ = $1; }
	| EXP_LOGICA				{ $$ = [$1]; }
	|
	;

ACCESOARRAY
	: identificador corchA EXP corchC 
	{ $$ = instruccionesAPI.nuevoAcceso($1, $3, this._$.first_line , this._$.first_column); }
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
	| identificador punto tLength	{ $$ = instruccionesAPI.nuevoLength($1, this._$.first_line, this._$.first_column ); }
	| parA EXP_LOGICA parC 		{ $$ = $2; }	
	| LLAMADA					{ $$ = $1; }
	| MASMAS_MENOSMENOS			{ $$ = $1; }	
	| ASIGARRAY					{ $$ = instruccionesAPI.nuevoAsigVec($1); }
	| ACCESOARRAY				{ $$ = $1; }
	| error { new SINTACTOCO("este es un error sintactico", yytext, this._$.first_line , this._$.first_column); }
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
	| tBoolean		{ $$ = TIPO_DATO.BOOLEANO; }
	| TIPO_VARIABLE corchA corchC	{ $$= $1; }
	| identificador	{ $$ = $1; }
	;

TRANSFERENCIA
	: tReturn EXP_LOGICA	{ $$ = instruccionesAPI.nuevoTransferencia($1, $2, this._$.first_line, this._$.first_column); }
	| tReturn				{ $$ = instruccionesAPI.nuevoTransferencia($1, undefined, this._$.first_line, this._$.first_column); }
	| tBreak				{ $$ = instruccionesAPI.nuevoTransferencia($1, undefined, this._$.first_line, this._$.first_column); }
	| tContinue				{ $$ = instruccionesAPI.nuevoTransferencia($1, undefined, this._$.first_line, this._$.first_column); }
	;

MASMAS_MENOSMENOS
	: identificador masmas		{ $$ = instruccionesAPI.nuevoMasmas($1, this._$.first_line, this._$.first_column); }
	| identificador menosmenos	{ $$ = instruccionesAPI.nuevoMenosmenos($1, this._$.first_line, this._$.first_column); }
	;


