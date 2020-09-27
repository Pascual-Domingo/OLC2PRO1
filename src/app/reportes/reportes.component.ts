import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ServisService} from '../servis.service';
import { TE, errorSin, errorLex, errorSem } from '../interprete/tabla_errores';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {

  tipoerror: any;
  flagLexico: boolean;
  flagsintactico: boolean;
  flagSemantico: boolean;

  milex = errorLex;
  misintac = errorSin;
  miseman = errorSem;
 
  constructor(private rutaActiva: ActivatedRoute, private miservis:ServisService) { 
    
  }

  ngOnInit(): void {
    
  }

  btnLexico() {
    this.tipoerror = "error lexico";
    this.btnDeshabilitar();
    this.flagLexico = true;
    console.log(errorLex);
    
  }

  btnSintactico() {
    this.tipoerror = "error sintactico";
    this.btnDeshabilitar();
    this.flagsintactico = true;
    console.log(errorSin);
  }

  btnSemantico() {
    this.tipoerror = "error semantico";
    this.btnDeshabilitar();
    this.flagSemantico = true;
    console.log(errorSem);
  }

  btnDeshabilitar() {
    this.flagLexico = false;
    this.flagsintactico = false;
    this.flagSemantico = false;
  }

}
