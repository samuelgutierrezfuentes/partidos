import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FuncionesService } from '../../servicios/funciones.service';
import { Equipos } from '../../model/equipos.model';

@Component({
  selector: 'app-busquedaciudad',
  templateUrl: './busquedaciudad.component.html',
  styles: [
  ]
})
export class BusquedaciudadComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  busqueda:string ;
  equipos: Equipos[] =[];

  constructor( private route: ActivatedRoute,  private funcionesService: FuncionesService) { }

  ngOnInit(): void {

    this.sub = this.route
    .queryParams
    .subscribe(params => {

      this.busqueda = params['cuidad'] || "";
      this.cargarDatos();
    });
  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }

  cargarDatos(){
    this.funcionesService.obtener()
    .subscribe( equipos => {

      this.equipos = equipos.map(
        t => {return {
          id: t.payload.doc.id,
          ...t.payload.doc.data()
        };
      });
      this.equipos = this.equipos.filter(equipos =>equipos.ciudad ==this.busqueda);
    });
  }

}
