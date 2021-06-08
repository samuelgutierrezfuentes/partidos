import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BusquedanacionalidadComponent } from './pages/busquedanacionalidad/busquedanacionalidad.component';
import { BusquedaciudadComponent } from './pages/busquedaciudad/busquedaciudad.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AgregareditarComponent } from './pages/equipos/agregareditar/agregareditar.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';


const routes: Routes = [
  {path: 'home', component: PagesComponent},
  {path: 'partidos', component: PartidosComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'busquedaciudad', component: BusquedaciudadComponent},
  {path: 'busquedanacionalidad', component: BusquedanacionalidadComponent},
  {path: 'equipos', component: EquiposComponent},
  {path: 'equipos/:id', component: AgregareditarComponent},
  {path: 'jugadores/:equipo', component: JugadoresComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
