(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _traductor_traductor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traductor/traductor.component */ "./src/app/traductor/traductor.component.ts");





const routes = [
    {
        path: '',
        redirectTo: '/traductor',
        pathMatch: 'full'
    },
    {
        path: 'traductor',
        component: _traductor_traductor_component__WEBPACK_IMPORTED_MODULE_2__["TraductorComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navegation_navegation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navegation/navegation.component */ "./src/app/navegation/navegation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'OLC2PRO1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navegation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navegation_navegation_component__WEBPACK_IMPORTED_MODULE_1__["NavegationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navegation_navegation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navegation/navegation.component */ "./src/app/navegation/navegation.component.ts");
/* harmony import */ var _traductor_traductor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./traductor/traductor.component */ "./src/app/traductor/traductor.component.ts");
/* harmony import */ var _graficar_graficar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graficar/graficar.component */ "./src/app/graficar/graficar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/__ivy_ngcc__/fesm2015/ctrl-ngx-codemirror.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_8__["CodemirrorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navegation_navegation_component__WEBPACK_IMPORTED_MODULE_4__["NavegationComponent"],
        _traductor_traductor_component__WEBPACK_IMPORTED_MODULE_5__["TraductorComponent"],
        _graficar_graficar_component__WEBPACK_IMPORTED_MODULE_6__["GraficarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_8__["CodemirrorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navegation_navegation_component__WEBPACK_IMPORTED_MODULE_4__["NavegationComponent"],
                    _traductor_traductor_component__WEBPACK_IMPORTED_MODULE_5__["TraductorComponent"],
                    _graficar_graficar_component__WEBPACK_IMPORTED_MODULE_6__["GraficarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_8__["CodemirrorModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/graficar/graficar.component.ts":
/*!************************************************!*\
  !*** ./src/app/graficar/graficar.component.ts ***!
  \************************************************/
/*! exports provided: GraficarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficarComponent", function() { return GraficarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GraficarComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraficarComponent.ɵfac = function GraficarComponent_Factory(t) { return new (t || GraficarComponent)(); };
GraficarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraficarComponent, selectors: [["app-graficar"]], decls: 2, vars: 0, template: function GraficarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "graficar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWZpY2FyL2dyYWZpY2FyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraficarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graficar',
                templateUrl: './graficar.component.html',
                styleUrls: ['./graficar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/interprete/grammar.js":
/*!***************************************!*\
  !*** ./src/app/interprete/grammar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,13],$V1=[1,7],$V2=[1,8],$V3=[1,9],$V4=[1,10],$V5=[1,11],$V6=[1,12],$V7=[1,3],$V8=[1,5],$V9=[1,15],$Va=[5,34,35],$Vb=[5,28,29,30,31,32,33,34,35],$Vc=[1,24],$Vd=[1,25],$Ve=[1,26],$Vf=[1,27],$Vg=[1,28],$Vh=[1,29],$Vi=[5,11,16,17,18,19,20,21,28,29,30,31,32,33,34,35],$Vj=[5,11,16,17,28,29,30,31,32,33,34,35],$Vk=[5,11,16,17,18,19,20,28,29,30,31,32,33,34,35];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Init":3,"EXP_LOGICA":4,"EOF":5,"LINSTRUCCIONES":6,"INSTRUCCION":7,"timprimir":8,"parA":9,"EXP":10,"parC":11,"ptcoma":12,"tif":13,"llaveA":14,"llaveC":15,"mas":16,"menos":17,"por":18,"div":19,"modular":20,"exponente":21,"entero":22,"decimal":23,"cadena1":24,"cadena2":25,"cadena3":26,"EXP_RELACIONAL":27,"mayque":28,"menque":29,"mayigque":30,"menigque":31,"igig":32,"noig":33,"and":34,"or":35,"not":36,"ttrue":37,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"timprimir",9:"parA",11:"parC",12:"ptcoma",13:"tif",14:"llaveA",15:"llaveC",16:"mas",17:"menos",18:"por",19:"div",20:"modular",21:"exponente",22:"entero",23:"decimal",24:"cadena1",25:"cadena2",26:"cadena3",28:"mayque",29:"menque",30:"mayigque",31:"menigque",32:"igig",33:"noig",34:"and",35:"or",36:"not",37:"ttrue"},
productions_: [0,[3,2],[6,2],[6,1],[7,5],[7,7],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[10,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,1],[4,3],[4,3],[4,2],[4,1],[4,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1]; 
break;
case 2:
 $$[$0-1].push($$[$0]); this.$ = S1; 
break;
case 3:
 this.$ = [S1]; 
break;
case 4:
 this.$ = instruccionesAPI.nuevoImprimir($$[$0-2]); 
break;
case 5:
 this.$ = instruccionesAPI.nuevoIf($$[$0-4], $$[$0-1]); 
break;
case 6:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.SUMA); 
break;
case 7:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.RESTA); 
break;
case 8:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MULTIPLICACION); 
break;
case 9:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DIVISION); 
break;
case 10:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MODULAR); 
break;
case 11:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.EXPONENTE); 
break;
case 12:
 this.$ = instruccionesAPI.nuevoOperacionUnaria($$[$0], TIPO_OPERACION.NEGATIVO); 
break;
case 13: case 14:
 this.$ = instruccionesAPI.nuevoValor(Number($$[$0]), TIPO_VALOR.NUMERO); 
break;
case 15: case 16: case 17:
 this.$ = instruccionesAPI.nuevoValor($$[$0], TIPO_VALOR.CADENA); 
break;
case 18:
 this.$ = $$[$0-1]; 
break;
case 19:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR_QUE); 
break;
case 20:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR_QUE); 
break;
case 21:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR_IGUAL); 
break;
case 22:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR_IGUAL); 
break;
case 23:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DOBLE_IGUAL); 
break;
case 24:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.NO_IGUAL); 
break;
case 25: case 29:
 this.$ = $$[$0]; 
break;
case 26:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.AND); 
break;
case 27:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.OR); 
break;
case 28:
 this.$ = instruccionesAPI.nuevoOperacionUnaria($$[$0], TIPO_OPERACION.NOT); 
break;
}
},
table: [{3:1,4:2,9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:4,36:$V7,37:$V8},{1:[3]},{5:[1,14],34:$V9,35:[1,16]},{4:17,9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:4,36:$V7,37:$V8},o($Va,[2,29],{28:[1,18],29:[1,19],30:[1,20],31:[1,21],32:[1,22],33:[1,23]}),o($Va,[2,30]),o($Vb,[2,25],{16:$Vc,17:$Vd,18:$Ve,19:$Vf,20:$Vg,21:$Vh}),{9:$V0,10:30,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},o($Vi,[2,13]),o($Vi,[2,14]),o($Vi,[2,15]),o($Vi,[2,16]),o($Vi,[2,17]),{9:$V0,10:31,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},{1:[2,1]},{4:32,9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:4,36:$V7,37:$V8},{4:33,9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:4,36:$V7,37:$V8},o($Va,[2,28]),{9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:34},{9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:35},{9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:36},{9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:37},{9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:38},{9:$V0,10:6,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6,27:39},{9:$V0,10:40,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},{9:$V0,10:41,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},{9:$V0,10:42,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},{9:$V0,10:43,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},{9:$V0,10:44,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},{9:$V0,10:45,17:$V1,22:$V2,23:$V3,24:$V4,25:$V5,26:$V6},o($Vi,[2,12]),{11:[1,46],16:$Vc,17:$Vd,18:$Ve,19:$Vf,20:$Vg,21:$Vh},o($Va,[2,26]),o([5,35],[2,27],{34:$V9}),o($Vb,[2,19]),o($Vb,[2,20]),o($Vb,[2,21]),o($Vb,[2,22]),o($Vb,[2,23]),o($Vb,[2,24]),o($Vj,[2,6],{18:$Ve,19:$Vf,20:$Vg,21:$Vh}),o($Vj,[2,7],{18:$Ve,19:$Vf,20:$Vg,21:$Vh}),o($Vk,[2,8],{21:$Vh}),o($Vk,[2,9],{21:$Vh}),o($Vk,[2,10],{21:$Vh}),o($Vi,[2,11]),o($Vi,[2,18])],
defaultActions: {14:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

	const TIPO_VALOR 		= __webpack_require__(/*! ./instrucciones */ "./src/app/interprete/instrucciones.ts").TIPO_VALOR;
	const TIPO_DATO			= __webpack_require__(/*! ./tabla_simbolos */ "./src/app/interprete/tabla_simbolos.ts").TIPO_DATO; //para jalar el tipo de dato
	const TIPO_OPERACION	= __webpack_require__(/*! ./instrucciones */ "./src/app/interprete/instrucciones.ts").TIPO_OPERACION;
	const instruccionesAPI	= __webpack_require__(/*! ./instrucciones */ "./src/app/interprete/instrucciones.ts").instruccionesAPI;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true,"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: return 16; 
break;
case 1: return 17; 
break;
case 2: return 18; 
break;
case 3: return 19; 
break;
case 4: return 9; 
break;
case 5: return 11; 
break;
case 6: return 14; 
break;
case 7: return 15; 
break;
case 8: return 12; 
break;
case 9: return 28; 
break;
case 10: return 29; 
break;
case 11: return 30; 
break;
case 12: return 31; 
break;
case 13: return 32; 
break;
case 14: return 33; 
break;
case 15: return 36; 
break;
case 16: return 20; 
break;
case 17: return 21; 
break;
case 18: return 13; 
break;
case 19: return 8; 
break;
case 20: return 37; 
break;
case 21: return 23; 
break;
case 22: return 22; 
break;
case 23: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 24; 
break;
case 24: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 25; 
break;
case 25: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 26; 
break;
case 26:/* skip whitespace */
break;
case 27:// comentario simple línea
break;
case 28:// comentario multiple líneas
break;
case 29:return 5 //fin de cadena
break;
case 30:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:(\+))/i,/^(?:(-))/i,/^(?:(\*))/i,/^(?:(\/))/i,/^(?:(\())/i,/^(?:(\)))/i,/^(?:(\{))/i,/^(?:(\}))/i,/^(?:(;))/i,/^(?:(>))/i,/^(?:(<))/i,/^(?:(>=))/i,/^(?:(<=))/i,/^(?:(==))/i,/^(?:(!=))/i,/^(?:(!))/i,/^(?:(%))/i,/^(?:(\*\*))/i,/^(?:(if))/i,/^(?:(console\.log))/i,/^(?:(true))/i,/^(?:([0-9]+(\.[0-9]+)))/i,/^(?:([0-9]+))/i,/^(?:("[^\"]*"))/i,/^(?:('[^\"]*'))/i,/^(?:(`[^\"]*`))/i,/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/interprete/instrucciones.ts":
/*!*********************************************!*\
  !*** ./src/app/interprete/instrucciones.ts ***!
  \*********************************************/
/*! exports provided: TIPO_OPERACION, TIPO_INSTRUCCION, TIPO_VALOR, instruccionesAPI, TIPO_OPCION_SWITCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPO_OPERACION", function() { return TIPO_OPERACION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPO_INSTRUCCION", function() { return TIPO_INSTRUCCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPO_VALOR", function() { return TIPO_VALOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instruccionesAPI", function() { return instruccionesAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPO_OPCION_SWITCH", function() { return TIPO_OPCION_SWITCH; });
/*
function pr2(a, b) {
    return a + b;
  }

export const prb = pr2;

*/
// Constantes para los tipos de 'valoresult' que reconoce nuestra gramática.
const tIPO_VALOR = {
    NUMERO: 'VAL_NUMERO',
    IDENTIFICADOR: 'VAL_IDENTIFICADOR',
    CADENA: 'VAL_CADENA',
};
// Constantes para los tipos de 'operaciones' que soporta nuestra gramática.
const tIPO_OPERACION = {
    SUMA: 'OP_SUMA',
    RESTA: 'OP_RESTA',
    MULTIPLICACION: 'OP_MULTIPLICACION',
    DIVISION: 'OP_DIVISION',
    MODULAR: 'MODULAR',
    EXPONENTE: 'OP_EXPONENTE',
    NEGATIVO: 'OP_NEGATIVO',
    MAYOR_QUE: 'OP_MAYOR_QUE',
    MENOR_QUE: 'OP_MENOR_QUE',
    MAYOR_IGUAL: 'OP_MAYOR_IGUAL',
    MENOR_IGUAL: 'OP_MENOR_IGUAL',
    DOBLE_IGUAL: 'OP_DOBLE_IGUAL',
    NO_IGUAL: 'OP_NO_IGUAL',
    AND: 'OP_AND',
    OR: 'OP_OR',
    NOT: 'OP_NOT',
    CONCATENACION: 'OP_CONCATENACION'
};
// Constantes para los tipos de 'instrucciones' válidas en nuestra gramática.
const tIPO_INSTRUCCION = {
    IMPRIMIR: 'INSTR_IMPRIMIR',
    MIENTRAS: 'INSTR_MIENTRAS',
    DECLARACION: 'INSTR_DECLARACION',
    ASIGNACION: 'INSTR_ASIGANCION',
    IF: 'INSTR_IF',
    IF_ELSE: 'INSTR_ELSE',
    PARA: 'INST_PARA',
    SWITCH: 'SWITCH',
    SWITCH_OP: 'SWITCH_OP',
    SWITCH_DEF: 'SWITCH_DEF',
    ASIGNACION_SIMPLIFICADA: 'ASIGNACION_SIMPLIFICADA'
};
// Constantes para los tipos de OPCION_SWITCH validas en la gramática
const tIPO_OPCION_SWITCH = {
    CASO: 'CASO',
    DEFECTO: 'DEFECTO'
};
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
    };
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
    nuevoOperacionBinaria: function (operandoIzq, operandoDer, tipo) {
        return nuevaOperacion(operandoIzq, operandoDer, tipo);
    },
    /**
     * Crea un nuevo objeto tipo Operación para las operaciones unarias válidas
     * @param {*} operando
     * @param {*} tipo
     */
    nuevoOperacionUnaria: function (operando, tipo) {
        return nuevaOperacion(operando, undefined, tipo);
    },
    /**
     * Crea un nuevo objeto tipo Valor, esto puede ser una cadena, un número o un identificador
     * @param {*} valor
     * @param {*} tipo
     */
    nuevoValor: function (valor, tipo) {
        return {
            tipo: tipo,
            valor: valor
        };
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia Imprimir.
     * @param {*} expresultionCadena
     */
    nuevoImprimir: function (expresultionCadena) {
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
    nuevoMientras: function (expresultionLogica, instrucciones) {
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
        };
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia Declaración.
     * @param {*} identificador
     */
    nuevoDeclaracion: function (identificador, tipo) {
        return {
            tipo: TIPO_INSTRUCCION.DECLARACION,
            identificador: identificador,
            tipo_dato: tipo
        };
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia Asignación.
     * @param {*} identificador
     * @param {*} expresultionNumerica
     */
    nuevoAsignacion: function (identificador, expresultionNumerica) {
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            identificador: identificador,
            expresultionNumerica: expresultionNumerica
        };
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia If.
     * @param {*} expresultionLogica
     * @param {*} instrucciones
     */
    nuevoIf: function (expresultionLogica, instrucciones) {
        return {
            tipo: TIPO_INSTRUCCION.IF,
            expresultionLogica: expresultionLogica,
            instrucciones: instrucciones
        };
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia If-Else.
     * @param {*} expresultionLogica
     * @param {*} instruccionesIfVerdadero
     * @param {*} instruccionesIfFalso
     */
    nuevoIfElse: function (expresultionLogica, instruccionesIfVerdadero, instruccionesIfFalso) {
        return {
            tipo: TIPO_INSTRUCCION.IF_ELSE,
            expresultionLogica: expresultionLogica,
            instruccionesIfVerdadero: instruccionesIfVerdadero,
            instruccionesIfFalso: instruccionesIfFalso
        };
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia Switch.
     * @param {*} expresultionNumerica
     * @param {*} instrucciones
     */
    nuevoSwitch: function (expresultionNumerica, casos) {
        return {
            tipo: TIPO_INSTRUCCION.SWITCH,
            expresultionNumerica: expresultionNumerica,
            casos: casos
        };
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
    nuevoCaso: function (expresultionNumerica, instrucciones) {
        return {
            tipo: TIPO_OPCION_SWITCH.CASO,
            expresultionNumerica: expresultionNumerica,
            instrucciones: instrucciones
        };
    },
    /**
     * Crea un objeto tipo OPCION_SWITCH para un CASO DEFECTO de la sentencia switch.
     * @param {*} instrucciones
     */
    nuevoCasoDef: function (instrucciones) {
        return {
            tipo: TIPO_OPCION_SWITCH.DEFECTO,
            instrucciones: instrucciones
        };
    },
    /**
    * Crea un objeto tipo Operador (+ , - , / , *)
    * @param {*} operador
    */
    nuevoOperador: function (operador) {
        return operador;
    },
    /**
     * Crea un objeto tipo Instrucción para la sentencia Asignacion con Operador
     * @param {*} identificador
     * @param {*} operador
     * @param {*} expresultionCadena
     */
    nuevoAsignacionSimplificada: function (identificador, operador, expresultionNumerica) {
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION_SIMPLIFICADA,
            operador: operador,
            expresultionNumerica: expresultionNumerica,
            identificador: identificador
        };
    }
};
// Exportamos nuestras constantes y nuestra API
const TIPO_OPERACION = tIPO_OPERACION;
const TIPO_INSTRUCCION = tIPO_INSTRUCCION;
const TIPO_VALOR = tIPO_VALOR;
const instruccionesAPI = InstruccionesAPI;
const TIPO_OPCION_SWITCH = tIPO_OPCION_SWITCH;


/***/ }),

/***/ "./src/app/interprete/recorridoAST.ts":
/*!********************************************!*\
  !*** ./src/app/interprete/recorridoAST.ts ***!
  \********************************************/
/*! exports provided: ejecutar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ejecutar", function() { return ejecutar; });
/* harmony import */ var _instrucciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instrucciones */ "./src/app/interprete/instrucciones.ts");
/* harmony import */ var _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabla_simbolos */ "./src/app/interprete/tabla_simbolos.ts");


//const tsGlobal = new TS([]);
function _main(AST) {
    return recorrerAST(AST);
}
function recorrerAST(instrucciones) {
    console.log(instrucciones);
    return procesarExpresultionNumerica(instrucciones).valor;
}
function procesarExpresultionNumerica(expresultion) {
    if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].NEGATIVO) {
        // Es un valor negado.
        // En este caso necesitamos procesar el valor del operando para poder negar su valor.
        // Para esto invocamos (recursivamente) esta función para sesolver el valor del operando.
        const valor = procesarExpresultionNumerica(expresultion.operandoIzq).valor; // resultolvemos el operando
        const result = valor * -1; // Retornamos el valor negado.
        return { valor: result, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
    }
    else if (expresultion.tipo == _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].SUMA
        || expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].RESTA
        || expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].MULTIPLICACION
        || expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].DIVISION
        || expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].EXPONENTE
        || expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].MODULAR) {
        console.log(expresultion);
        //console.log(sumar);
        let valorIzq = procesarExpresultionNumerica(expresultion.operandoIzq); // resultolvemos el operando izquierdo.
        let valorDer = procesarExpresultionNumerica(expresultion.operandoDer); // resultolvemos el operando derecho.
        if (valorIzq.tipo !== _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO || valorDer.tipo !== _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO) {
            throw 'ERROR: se esperaban expresultiones numericas para ejecutar la: ' + expresultion.tipo;
        }
        else {
            valorIzq = valorIzq.valor;
            valorDer = valorDer.valor;
        }
        /* operar la expresultion aritmetica*/
        if (expresultion.tipo == _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].SUMA) {
            const result = valorIzq + valorDer;
            return { valor: result, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
        }
        if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].RESTA) {
            const result = valorIzq - valorDer;
            return { valor: result, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
        }
        if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].MULTIPLICACION) {
            const result = valorIzq * valorDer;
            return { valor: result, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
        }
        if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].MODULAR) {
            const result = valorIzq % valorDer;
            return { valor: result, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
        }
        if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].DIVISION) {
            if (valorDer === 0) {
                throw 'ERROR: la division entre 0 da como resultultado: ' + valorIzq / valorDer;
            }
            else {
                const result = valorIzq / valorDer;
                return { valor: result, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
            }
        }
        if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_OPERACION"].EXPONENTE) {
            const resultult = Math.pow(valorIzq, valorDer);
            return { valor: resultult, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
        }
    }
    else if (expresultion.tipo == _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_VALOR"].NUMERO) {
        // Es un valor numérico.
        // En este caso únicamente retornamos el valor obtenido por el parser directamente.
        return { valor: expresultion.valor, tipo: _tabla_simbolos__WEBPACK_IMPORTED_MODULE_1__["TIPO_DATO"].NUMERO };
    }
    else if (expresultion.tipo === _instrucciones__WEBPACK_IMPORTED_MODULE_0__["TIPO_VALOR"].IDENTIFICADOR) {
        // Es un identificador.
        // Obtenemos el valor de la tabla de simbolos
        //const sym = tablaDeSimbolos.obtener(expresultion.valor);
        //return {valor: sym.valor, tipo: sym.tipo};
    }
    else {
        throw 'ERROR: expresultión numérica no válida: ' + expresultion;
    }
}
const ejecutar = _main;


/***/ }),

/***/ "./src/app/interprete/tabla_simbolos.ts":
/*!**********************************************!*\
  !*** ./src/app/interprete/tabla_simbolos.ts ***!
  \**********************************************/
/*! exports provided: TIPO_DATO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPO_DATO", function() { return TIPO_DATO; });
// Constantes para los tipos de datos.
const tIPO_DATO = {
    NUMERO: 'NUMERO',
    STRING: 'STRING'
};
const TIPO_DATO = tIPO_DATO;


/***/ }),

/***/ "./src/app/navegation/navegation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navegation/navegation.component.ts ***!
  \****************************************************/
/*! exports provided: NavegationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegationComponent", function() { return NavegationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavegationComponent {
    constructor() { }
    ngOnInit() {
    }
    btnTraducir() {
        // (<HTMLInputElement>document.getElementById("idEjecutar")).value = entrada;
        try {
        }
        catch (error) {
        }
    }
    btnEjecutar() {
    }
    btnReportes() {
        window.alert("boton reportes");
    }
    btnTablaSimbolo() {
        window.alert("boton tabla de simbolos");
    }
    btnGraficar() {
        window.alert("boton AST");
    }
}
NavegationComponent.ɵfac = function NavegationComponent_Factory(t) { return new (t || NavegationComponent)(); };
NavegationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavegationComponent, selectors: [["app-navegation"]], decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], [1, "navbar-brand"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "nav-item"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-warning", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function NavegationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "COMPILADOresult 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavegationComponent_Template_button_click_9_listener() { return ctx.btnTraducir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "traducir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavegationComponent_Template_button_click_12_listener() { return ctx.btnEjecutar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ejecutar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavegationComponent_Template_button_click_15_listener() { return ctx.btnReportes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "reportes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavegationComponent_Template_button_click_18_listener() { return ctx.btnTablaSimbolo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "tabla de simbolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavegationComponent_Template_button_click_21_listener() { return ctx.btnGraficar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "GRAFICAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmVnYXRpb24vbmF2ZWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavegationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navegation',
                templateUrl: './navegation.component.html',
                styleUrls: ['./navegation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/traductor/traductor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/traductor/traductor.component.ts ***!
  \**************************************************/
/*! exports provided: TraductorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraductorComponent", function() { return TraductorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interprete_grammar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interprete/grammar */ "./src/app/interprete/grammar.js");
/* harmony import */ var _interprete_grammar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_interprete_grammar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interprete_recorridoAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interprete/recorridoAST */ "./src/app/interprete/recorridoAST.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/__ivy_ngcc__/fesm2015/ctrl-ngx-codemirror.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class TraductorComponent {
    constructor() {
        this.txtEntrada = "";
        this.txtConsola = "";
        this.txtEjecutar = "";
        this.codeMirror_options = {
            lineNumbers: true,
            theme: 'dracula',
            //theme :'mbo',
            lineWrapping: true,
            indentWithTabs: true,
            mode: 'xml',
            styleActiveLine: true
        };
    }
    ngOnInit() {
    }
    btnTraducir() {
        try {
            this.AST = _interprete_grammar__WEBPACK_IMPORTED_MODULE_1___default.a.parse(this.txtEntrada);
            this.txtConsola = "" + _interprete_recorridoAST__WEBPACK_IMPORTED_MODULE_2__["ejecutar"](this.AST);
            document.getElementById("idConsola").value = this.txtConsola;
        }
        catch (error) {
        }
    }
    btnEjecutar() {
    }
}
TraductorComponent.ɵfac = function TraductorComponent_Factory(t) { return new (t || TraductorComponent)(); };
TraductorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TraductorComponent, selectors: [["app-traductor"]], decls: 18, vars: 9, consts: [[1, "form-row"], [1, "col", "p-8"], [1, "p-1", "mb-2", "bg-info", "text-white"], ["type", "button", 1, "btn", "btn-outline-warning", 3, "click"], [1, "ngx-codemirror"], [3, "options", "ngModel", "disabled", "autoFocus", "ngModelChange"], [1, "col"], [1, "p-1", "mb-1", "bg-info", "text-white"], [1, "col", "p-2"], [1, "p-2", "mb-0", "bg-dark", "text-white"], ["id", "idConsola", "rows", "9", 1, "form-control", "console", 3, "disabled"]], template: function TraductorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraductorComponent_Template_button_click_3_listener() { return ctx.btnTraducir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "traducir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-codemirror", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TraductorComponent_Template_ngx_codemirror_ngModelChange_6_listener($event) { return ctx.txtEntrada = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraductorComponent_Template_button_click_9_listener() { return ctx.btnEjecutar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ejecutar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngx-codemirror", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TraductorComponent_Template_ngx_codemirror_ngModelChange_11_listener($event) { return ctx.txtEjecutar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CONSOLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.codeMirror_options)("ngModel", ctx.txtEntrada)("disabled", false)("autoFocus", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.codeMirror_options)("ngModel", ctx.txtEjecutar)("disabled", false)("autoFocus", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    } }, directives: [_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__["CodemirrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["textarea.form-control.console[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: blanchedalmond;\r\n    }\r\n\r\n    [_nghost-%COMP%]     .CodeMirror{\r\n        height:500px\r\n    }\r\n\r\n    .CodeMirror[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZHVjdG9yL3RyYWR1Y3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdHJhZHVjdG9yL3RyYWR1Y3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEuZm9ybS1jb250cm9sLmNvbnNvbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgOmhvc3QoKSA6Om5nLWRlZXAgLkNvZGVNaXJyb3J7XHJcbiAgICAgICAgaGVpZ2h0OjUwMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLkNvZGVNaXJyb3J7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraductorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-traductor',
                templateUrl: './traductor.component.html',
                styleUrls: ['./traductor.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "./node_modules/codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pasco\desktop\compi2\laboratorio\OLC2PRO1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map