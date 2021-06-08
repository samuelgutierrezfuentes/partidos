import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FuncionesService } from '../../servicios/funciones.service';

@Component({
  selector: 'app-busquedanacionalidad',
  templateUrl: './busquedanacionalidad.component.html',
  styles: [
  ]
})
export class BusquedanacionalidadComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  busqueda:string ;

  jugadores;

  constructor(private route: ActivatedRoute, private funcionesService: FuncionesService) {
    funcionesService.mostrarMenuClasificacion= true;
   }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }

  ngOnInit(): void {

    this.sub = this.route
    .queryParams
    .subscribe(params => {

      this.busqueda = params['nacion'] || "";
      console.log(this.busqueda);
      this.cargarDatos();
    });
  }


  cargarDatos(){

    this.funcionesService.obtenerJugadores()
    .subscribe( jugadores => {
      this.jugadores = jugadores.map(
        t => {return {
          id: t.payload.doc.id,
          ...t.payload.doc.data()
        };
      });

      this.jugadores = this.jugadores.filter(jugadores =>jugadores.nacionalidad ==this.busqueda);
     // console.log(this.listaEquipos);
    });
  }

}
