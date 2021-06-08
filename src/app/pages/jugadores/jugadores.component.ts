import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../../servicios/funciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styles: [
  ]
})
export class JugadoresComponent implements OnInit {

  equipo: string;
  jugadores;

  constructor(private route: ActivatedRoute, private funcionesService: FuncionesService) {
    funcionesService.mostrarMenuClasificacion= true;
   }

  ngOnInit(): void {

    this.route.paramMap.subscribe( params =>{

      this.equipo = params.get("equipo");
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

      this.jugadores = this.jugadores.filter(jugadores =>jugadores.equipo ==this.equipo);
     // console.log(this.listaEquipos);
    });
  }

}
