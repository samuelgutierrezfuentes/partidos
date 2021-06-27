import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FuncionesService } from '../../servicios/funciones.service';
import { Equipos } from '../../model/equipos.model';
import {GestionEquiposService} from '../../servicios/gestionEquipos.service';

@Component({
  selector: 'app-busquedaciudad',
  templateUrl: './busquedaciudad.component.html',
  styles: [
  ]
})
export class BusquedaciudadComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  busqueda: string ;
  equipos: Equipos[] = [];

  constructor( private route: ActivatedRoute,  private funcionesService: GestionEquiposService) { }

  ngOnInit(): void {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.busqueda = params.cuidad || '';
      this.cargarDatos();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  cargarDatos(): void {
    this.funcionesService.equiposByCiudad(this.busqueda)
    .subscribe( data => {
      this.equipos = data.equiposByCiudad;
    });
  }

}
