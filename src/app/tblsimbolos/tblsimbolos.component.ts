import { Component, OnInit } from '@angular/core';
import { tablSim } from '../interprete/tabla_simbolos';

@Component({
  selector: 'app-tblsimbolos',
  templateUrl: './tblsimbolos.component.html',
  styleUrls: ['./tblsimbolos.component.css']
})
export class TblsimbolosComponent implements OnInit {
  tabSym = tablSim;
  constructor() { }

  ngOnInit(): void {
  }

}
