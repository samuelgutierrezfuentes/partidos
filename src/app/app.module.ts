import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { PagesComponent } from './pages/pages.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BusquedanacionalidadComponent } from './pages/busquedanacionalidad/busquedanacionalidad.component';
import { BusquedaciudadComponent } from './pages/busquedaciudad/busquedaciudad.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { AgregareditarComponent } from './pages/equipos/agregareditar/agregareditar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment.prod';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    PagesComponent,
    PartidosComponent,
    BusquedaComponent,
    BusquedanacionalidadComponent,
    BusquedaciudadComponent,
    EquiposComponent,
    AgregareditarComponent,
    JugadoresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
