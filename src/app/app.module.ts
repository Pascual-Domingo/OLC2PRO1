import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './navegation/navegation.component';
import { TraductorComponent } from './traductor/traductor.component';
import { GraficarComponent } from './graficar/graficar.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ReportesComponent } from './reportes/reportes.component';
import { TblsimbolosComponent } from './tblsimbolos/tblsimbolos.component';
import { GraphASTComponent } from './graph-ast/graph-ast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    TraductorComponent,
    GraficarComponent,
    ReportesComponent,
    TblsimbolosComponent,
    GraphASTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
