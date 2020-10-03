//import { Route } from '@angular/compiler/src/core';
import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { TE, errorSin, errorLex, errorSem } from '../interprete/tabla_errores';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

/*
lexico = errorLex;
sintactico = errorSin;
semantico = errorSem;
*/
errores = {
  milex: errorLex,
  misintac: errorSin,
  miseman: errorSem
}

  constructor(private miservis:ServisService, private router:Router) { }

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
    this.miservis.reporte_errores = this.errores;
    this.router.navigate(['/reportes']); 
    
  }

  btnTablaSimbolo() {
    //this.miservis.reporte_errores = this.errores;
    this.router.navigate(['/tblsimbolos']);
  }

  btnGraficar() {
    this.router.navigate(['/graphast']);
  }

}
