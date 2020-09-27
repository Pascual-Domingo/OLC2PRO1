import { Component, OnInit } from '@angular/core';
import { TE, errorSin, errorLex, errorSem } from '../interprete/tabla_errores';
@Component({
  selector: 'app-graficar',
  templateUrl: './graficar.component.html',
  styleUrls: ['./graficar.component.css']
})
export class GraficarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(errorLex);
  }

}
