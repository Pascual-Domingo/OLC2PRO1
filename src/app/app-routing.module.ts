import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraductorComponent } from './traductor/traductor.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TblsimbolosComponent } from './tblsimbolos/tblsimbolos.component'
import { GraficarComponent } from './graficar/graficar.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
