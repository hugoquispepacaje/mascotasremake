import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaPerdidasGatosComponent } from './components/mascota-perdidas-gatos/mascota-perdidas-gatos.component';
import { MascotaPerdidasPerrosComponent } from './components/mascota-perdidas-perros/mascota-perdidas-perros.component';
import { MascotaPerdidasOtrosComponent } from './components/mascota-perdidas-otros/mascota-perdidas-otros.component';
import { MascotaEncontradasGatosComponent } from './components/mascota-encontradas-gatos/mascota-encontradas-gatos.component';
import { MascotaEncontradasPerrosComponent } from './components/mascota-encontradas-perros/mascota-encontradas-perros.component';
import { MascotaEncontradasOtrosComponent } from './components/mascota-encontradas-otros/mascota-encontradas-otros.component';
import { PublicarAnuncioComponent } from './components/publicar-anuncio/publicar-anuncio.component';
import { GestionarAnuncioComponent } from './components/gestionar-anuncio/gestionar-anuncio.component';

const routes: Routes = [
  { path: 'mascotas-perdidas-gatos', component: MascotaPerdidasGatosComponent },
  { path: 'mascotas-perdidas-perros', component: MascotaPerdidasPerrosComponent },
  { path: 'mascotas-perdidas-otros', component: MascotaPerdidasOtrosComponent },
  { path: 'mascotas-encontradas-gatos', component: MascotaEncontradasGatosComponent },
  { path: 'mascotas-encontradas-perros', component: MascotaEncontradasPerrosComponent },
  { path: 'mascotas-encontradas-otros', component: MascotaEncontradasOtrosComponent },
  { path: 'publicar', component: PublicarAnuncioComponent },
  { path: 'gestionar', component: GestionarAnuncioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
