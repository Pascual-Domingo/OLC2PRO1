import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraductorComponent } from './traductor/traductor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/traductor',
    pathMatch: 'full'
  },
  {
    path: 'traductor',
    component: TraductorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
