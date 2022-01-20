import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
const routes: Routes = [
  {
    path: 'anuncios',
    loadChildren: () => import('./anuncios/anuncios.module').then(m => m.AnunciosModule)
  },
  {
    path: '',
    component: InicioComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
