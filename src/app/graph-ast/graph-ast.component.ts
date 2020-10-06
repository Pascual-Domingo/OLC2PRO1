import { Component, OnInit } from '@angular/core';
import { graphviz } from 'd3-graphviz';
import { wasmFolder } from '@hpcc-js/wasm';
import { exportAST } from '../interprete/recorridoAST';
import { TIPO_OPERACION, TIPO_VALOR, TIPO_INSTRUCCION, instruccionesAPI, TIPO_OPCION_SWITCH } from '../interprete/instrucciones';




@Component({
  selector: 'app-graph-ast',
  templateUrl: './graph-ast.component.html',
  styleUrls: ['./graph-ast.component.css']
})
export class GraphASTComponent implements OnInit {
  flagAstTraductor = false;
  flagAstInterprete = true;
  codigoGraph = 'digraph { ';
  z = 0;


  constructor() { }

  ngOnInit(): void {
    //wasmFolder('/assets/@hpcc-js/wasm/dist/'); //cde local
    wasmFolder('https://cdn.jsdelivr.net/npm/@hpcc-js/wasm@0.3.13/dist'); //cdn nube
    //console.log(exportAST);

    //this.codigoGraph += '   a -> b a -> c a -> d ';
    this.primerRecorrido(exportAST, 1);
    this.codigoGraph += ' } ';

    graphviz("#graph")
      .renderDot(this.codigoGraph);
  }

  btnTraductor() {
    this.flagAstTraductor = true;
    this.flagAstInterprete = false;
  }

  btnInterpete() {
    this.flagAstTraductor = false;
    this.flagAstInterprete = true

  }

  primerRecorrido(instrucciones, cont) {

    if (instrucciones.izquierda) {
      this.codigoGraph += '\"' + instrucciones.tipo + ',' + (cont - 1) + '\" -> ';
      const padre = '\"' + instrucciones.izquierda.tipo + ',' + cont + '\" ';
      this.codigoGraph += padre;
      if(instrucciones.izquierda.tipo === TIPO_INSTRUCCION.FUNCION){
          this.procesar_funcion(instrucciones.izquierda, padre, cont+this.z++);
      }else{
        this.listaInstrucciones(instrucciones.izquierda.instruccion, padre, cont);
      }
      this.primerRecorrido(instrucciones.izquierda, cont + 1);
      //console.log(instrucciones.izquierda);

    }

    if (instrucciones.derecha !== undefined) {
      //console.log(instrucciones.derecha.tipo);
      this.codigoGraph += '\"' + instrucciones.tipo + ',' + (cont - 1) + '\" -> ';
      this.codigoGraph += '\"' + instrucciones.derecha.tipo + ',' + cont + '\" ';
      this.primerRecorrido(instrucciones.derecha, cont + 1);
    }

  }

  listaInstrucciones(instrucciones, padre, cont) {

    if (instrucciones != undefined) {
      for (let i = 0; i < instrucciones.length; i++) {
        this.z++;
        //console.log(instrucciones[i]);
        const node = '\"' + instrucciones[i].tipo + ',' + (cont + this.z++) + '\"';
        this.codigoGraph += padre + ' -> ' + node;
        if (instrucciones[i].tipo === TIPO_INSTRUCCION.MITYPE) {
          this.codigoGraph += node + ' -> \"' + this.identificadorConcat(instrucciones[i].identificador) + ', ' + cont + '\"';
          this.codigoGraph += node + ' -> \" = ' + cont + '\"';
          const hijo = '\" ASIGNACION ' + cont + '\"';
          this.codigoGraph += node + ' -> ' + hijo;
          this.mytype(instrucciones[i].expresion, hijo, cont + this.z++);
        } else if (instrucciones[i].tipo === TIPO_INSTRUCCION.VARIABLE) {
          this.variables(instrucciones[i], node, cont + this.z++);
        } else if (instrucciones[i].tipo === TIPO_INSTRUCCION.IMPRIMIR) {
          this.imprimir(instrucciones[i], node, cont + this.z++);
        } else if (instrucciones[i].tipo === TIPO_INSTRUCCION.IMPRIMIR_ARRAY) {
          this.imprimir(instrucciones[i], node, cont + this.z++);
        } else if (instrucciones[i].tipo === TIPO_INSTRUCCION.IF) {
          this.instruccion_if(instrucciones[i], node, cont + this.z++);
        } else if (instrucciones[i].tipo === TIPO_INSTRUCCION.IF_ELSE) {
          this.instruccion_ifelse(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.ELSEIF) {
          this.instrucciones_elseif(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.INS_FOR) {
          this.instruccion_for(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.INS_WHILE) {
          this.instruccion_while(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.INS_DOWHILE) {
          this.instruccion_do_while(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.TRANSFERIR) {
          this.transferencia(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.LLAMADA) {
          this.llamada(instrucciones[i], node, cont + this.z++);
        }else if (instrucciones[i].tipo === TIPO_INSTRUCCION.SWITCH) {
          this.instruccion_switch(instrucciones[i], node, cont + this.z++);
        }

      }


    }
  }

  instruccion_switch(instruccion, padre, contador){
    this.z++;
    const expres = '\" EXPRESION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + expres;
    this.grafexp(instruccion.expresion, expres, contador+this.z++);

    /* casos */
    const caso_padre = '\" CASOS, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + caso_padre;
    (instruccion.casos).forEach(element => {
      this.z++;
      const caso_hijo = '\" CASOS, ' + (contador +this.z++)+ '\"';
      this.codigoGraph += caso_padre + ' -> ' + caso_hijo;
      this.listaInstrucciones(element.instrucciones, caso_hijo, contador+this.z++);
    });

  }

  llamada(instruccion, padre, contador){
    this.z++;
    this.codigoGraph += padre + ' -> \"'+this.identificadorConcat(instruccion.identificador)+', '+contador+this.z + '\"';
    if(instruccion.parametro !== undefined){
      const parametro = '\" PARAMETRO, ' + (contador +this.z++)+ '\"';
      this.codigoGraph += padre + ' -> ' + parametro;

      (instruccion.parametro).forEach(element => {
        this.grafexp(element, parametro, contador+this.z++);
      });
    }
   
  }

  transferencia(instruccion, padre, contador){
    this.z++;
    this.codigoGraph += padre + ' -> \"'+instruccion.valor+', '+(contador+this.z++) + '\"';
    if(instruccion.expresion){
      this.grafexp(instruccion.expresion, padre, contador+this.z++);
    }
  }

  procesar_funcion(instruccion, padre, contador){
    this.z++;
    this.codigoGraph += padre + ' -> \"'+this.identificadorConcat(instruccion.identificador)+', '+contador+this.z + '\"';
    if(instruccion.parametro !== undefined){
      const parametro = '\" PARAMETRO, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + parametro;
    this.parametro(instruccion.parametro, parametro, contador+this.z++);
    }

    const _instruction = '\" INSTRUCCIONES, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + _instruction;
    this.listaInstrucciones(instruccion.valor, _instruction, contador+this.z++);
  }

  parametro(instruccion, padre, contador){
    this.z++;
    instruccion.forEach(element => {
        this.codigoGraph += padre +' -> \"'+this.identificadorConcat(element.identificador)+', '+(contador+ this.z++)+'\"';
    });
  }

  instruccion_do_while(instrucciones, padre, contador){
    this.z++;
    const sentencia = '\" INSTRUCCION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + sentencia;
    this.listaInstrucciones(instrucciones.instruccion, sentencia, contador+this.z++);

    const condicion = '\" CONDICION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + condicion;
    this.grafexp(instrucciones.expresion, condicion, contador+this.z++);
  }

  instruccion_while(instrucciones, padre, contador){
    this.z++;
    const condicion = '\" CONDICION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + condicion;
    this.grafexp(instrucciones.expresion, condicion, contador+this.z++);

    const sentencia = '\" INSTRUCCION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + sentencia;
    this.listaInstrucciones(instrucciones.instruccion, sentencia, contador+this.z++);
  }

  instruccion_for(instrucciones, padre, contador){
    this.z++;
    const expres = '\" EXPRESION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + expres;
    this.listaInstrucciones([instrucciones.variable], expres, contador+this.z++);

    const condicion = '\" CONDICION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + condicion;
    this.grafexp(instrucciones.expresionlogica, condicion, contador+this.z++);

    const sentencia = '\" INSTRUCCION, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + sentencia;
    this.listaInstrucciones(instrucciones.instruccion, sentencia, contador+this.z++);
  }

  instrucciones_elseif(instrucciones, padre, contador){
    this.z++;
    const node = '\"IF, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + node;
    this.instruccion_if(instrucciones.instruccionIf, node, contador + this.z++);
    (instrucciones.instruccionElseIf).forEach(element => {
      const elseif = '\"ELSE IF, ' + (contador +this.z++)+ '\"';
    this.codigoGraph += padre + ' -> ' + elseif;
      this.instruccion_if(element, elseif, contador+this.z++) 
    });

    if(instrucciones.instruccionElse){
      const node = '\"ELSE, ' + (contador +this.z++)+ '\"';
      this.codigoGraph += padre + ' -> ' + node;
      this.listaInstrucciones(instrucciones.instruccionElse, node, contador + this.z++);
    }

  }

  instruccion_ifelse(instrucciones, padre, contador) {
    this.z++;
    this.instruccion_if(instrucciones.instruccionIf, padre, contador + this.z++);
    const sentencia = '\"SENTENCIA ELSE, ' + contador + '\"';
    this.codigoGraph += padre + ' -> ' + sentencia;
    this.listaInstrucciones(instrucciones.instruccionElse, sentencia, contador + this.z++);
  }

  instruccion_if(instruccion, padre, contador) {
    this.z++;
    const condicion = padre + ' -> \" CODICION, ' + contador + '\"';
    this.grafexp(instruccion.expresion, condicion, contador + this.z++);
    const sentencia = '\" SENTENCIA IF, ' + contador + '\"';
    this.codigoGraph += padre + ' -> ' + sentencia;
    this.listaInstrucciones(instruccion.instrucciones, sentencia, contador + this.z++);
  }

  imprimir(instrucciones, padre, contador) {
    this.z++;
    if (instrucciones.identificador) {
      this.grafexp(instrucciones.identificador, padre, (contador+this.z++));
    }
    this.grafexp(instrucciones.expresion, padre, (contador+this.z++));
  }

  variables(instrucciones, padre, cont) {
    (instrucciones.lsID).forEach(element => {
      //console.log(element);
      this.z++;
      const node = '\"' + element.tipo + ', ' + (cont+this.z++) + '\"';
      this.codigoGraph += padre + ' -> ' + node;
      if (element.tipo === TIPO_INSTRUCCION.ASIGNACION_DECLARADA) {
        this.asignacionDeclarada(element, node, (cont+this.z++));
      } else if (element.tipo === TIPO_INSTRUCCION.DECLARACION) {
        this.codigoGraph += node + ' -> \"' + this.identificadorConcat(element.identificador) + ', ' + (cont+this.z++) + '\"';
      } else if (element.tipo === TIPO_INSTRUCCION.ASIGNACION) {
        this.asignacionDeclarada(element, node, (cont+this.z++));
      }
      //console.log(this.identificadorConcat(element.identificador));
    });
  }

  asignaVector(instrucciones, padre, contador) {
    //console.log(instrucciones);
    this.z++;
    let conta = 1.5;
    (instrucciones.expresion).forEach(element => {
      this.grafexp(element, padre, contador + (conta+this.z++));
      conta++;
    });
  }
  asignacionDeclarada(instrucciones, padre, cont) {
    this.z++;
    this.codigoGraph += padre + ' -> \"' + this.identificadorConcat(instrucciones.identificador) + ', ' + (cont+this.z++) + '\"';
    this.codigoGraph += padre + ' -> \" = ' + (cont+this.z++) + '\"';
    if (instrucciones.expresion.tipo === TIPO_INSTRUCCION.STRUCT) {
      const hijo = '\" ASIGNACION ' + (cont+this.z++) + '\"';
      this.codigoGraph += padre + ' -> ' + hijo;
      this.mytype(instrucciones.expresion.expresion, hijo, (cont+this.z++));
    } else {
      this.grafexp(instrucciones.expresion, padre, (cont+this.z++));
    }
  }

  grafexp(instruccion, padre, contador) {
    this.z++;
    const node = '\"' + instruccion.tipo + ', ' + (contador+this.z++) + '\"';
    this.codigoGraph += padre + ' -> ' + node;
    if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACON_VEC) {
      return this.asignaVector(instruccion, node, (contador+this.z++));
    }
    if (instruccion.operandoIzq) {
      this.grafexp(instruccion.operandoIzq, node, (contador+this.z++) + 110);
    }
    if (instruccion.operandoDer) {
      this.grafexp(instruccion.operandoDer, node, (contador+this.z++) + 100);
    }

    if (instruccion.valor) {
      this.codigoGraph += node + ' -> \" id: ' + (contador+this.z++) + ',  valor: ' + instruccion.valor + '\"';
    }

  }

  identificadorConcat(id) {
    const size = id.length;
    let retornar = id[0];
    if (size == 1) {
      return retornar;
    } else {

      for (let index = 1; index < id.length; index++) {
        retornar += '.' + id[index];
      }
      return retornar;
    }
  }

  mytype(instrucciones, padre, cont) {
    let id = 0;
    //console.log(instrucciones);
    (instrucciones).forEach(element => {
      const hijo = '\"' + element.identificador[0] + ',' + (cont+this.z++) + '\"';
      this.codigoGraph += padre + ' -> ' + hijo;
      this.codigoGraph += hijo + ' -> \"' + element.expresion.tipo + ': ' + element.expresion.valor + ', ' + cont + id + '\"';
      id++;
    });
  }



}
