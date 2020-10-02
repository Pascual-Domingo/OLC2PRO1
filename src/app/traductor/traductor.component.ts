import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';
import Parser from '../interprete/grammar';
import *as  interprete from '../interprete/recorridoAST';
import { resetTE } from '../interprete/tabla_errores';
import { resetTS } from '../interprete/tabla_simbolos';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  txtEntrada = "";
  txtConsola = "";
  txtEjecutar = "";
  flagConsole:boolean = true;
  flagGraficarTS:boolean = false;

  graficarTS;

  AST: any;

  codeMirror_options: any = {
    lineNumbers: true,
    theme: 'dracula',
    lineWrapping: true,
    indentWithTabs: true,
    mode: 'xml',
    styleActiveLine: true
  };

  constructor(private miservis:ServisService) { }

  ngOnInit(): void {
  }

  btnTraducir() {
    try {
      resetTS();  // metodo que limpia lista de tabla simbolos
      resetTE();  //metodo que limpia la lista de tabla de errores
      this.AST = Parser.parse(this.txtEntrada);
      this.txtConsola = "" + interprete.ejecutar(this.AST);
      (<HTMLInputElement>document.getElementById("idConsola")).value = this.txtConsola;
    } catch (error) {

    }
  }

  btnEjecutar() {

  }

  btnConsola(){
    this.flagConsole = true;
    this.flagGraficarTS = false;
  }

  btnGraficarTS(){
    this.flagGraficarTS = true;
    this.flagConsole = false;
    this.graficarTS = interprete.graficarTS;
    //console.log(interprete.graficarTS);
  }

}
