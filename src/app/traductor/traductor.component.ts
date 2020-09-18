import { Component, OnInit } from '@angular/core';
import Parser from '../interprete/grammar';
import *as  interprete from '../interprete/recorridoAST';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  txtEntrada = "";
  txtConsola = "";
  txtEjecutar = "";

  AST: any;

  codeMirror_options: any = {
    lineNumbers: true,
    theme: 'dracula',
    //theme :'mbo',
    lineWrapping: true,
    indentWithTabs: true,
    mode: 'xml',
    styleActiveLine: true
  };
  constructor() { }

  ngOnInit(): void {
  }

  btnTraducir() {
    try {
      this.AST = Parser.parse(this.txtEntrada);
      this.txtConsola = "" + interprete.ejecutar(this.AST);
      (<HTMLInputElement>document.getElementById("idConsola")).value = this.txtConsola;
    } catch (error) {

    }
  }

  btnEjecutar() {

  }

}
