import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  btnTraducir() {
    // (<HTMLInputElement>document.getElementById("idEjecutar")).value = entrada;
    try {
    } catch (error) {
        
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
