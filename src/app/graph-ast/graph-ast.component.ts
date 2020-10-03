import { Component, OnInit } from '@angular/core';
import { d3 } from 'd3-graphviz';
import { wasmFolder } from '@hpcc-js/wasm';



@Component({
  selector: 'app-graph-ast',
  templateUrl: './graph-ast.component.html',
  styleUrls: ['./graph-ast.component.css']
})
export class GraphASTComponent implements OnInit {
  flagAstTraductor = false;
  flagAstInterprete = true;

  constructor() { }

  ngOnInit(): void {
    d3.graphviz("#graph")
    .renderDot('digraph {a -> b}');
  }

  btnTraductor() {
    this.flagAstTraductor = true;
    this.flagAstInterprete = false;
  }

  btnInterpete() {
    this.flagAstTraductor = false;
    this.flagAstInterprete = true;



  }

}
