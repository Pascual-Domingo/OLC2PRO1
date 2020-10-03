import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraductorComponent } from './traductor/traductor.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TblsimbolosComponent } from './tblsimbolos/tblsimbolos.component'
import { GraficarComponent } from './graficar/graficar.component';
import { GraphASTComponent } from './graph-ast/graph-ast.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/traductor',
    pathMatch: 'full'
  },
  {
    path: 'traductor',
    component: TraductorComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'tblsimbolos',
    component: TblsimbolosComponent
  }
  ,
  {
    path: 'graficar',
    component: GraficarComponent
  },
  {
    path: 'graphast',
    component: GraphASTComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
