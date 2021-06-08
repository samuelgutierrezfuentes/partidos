import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../servicios/funciones.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  listaEquipos;
  listaEquiposEste;
  listaEquiposOeste;
  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {

    this.cargarDatos();
  }

  cargarDatos(){

    this.funcionesService.obtenerClasificacion()
    .subscribe( equipos => {
      this.listaEquipos = equipos.map(
        t => {return {
          id: t.payload.doc.id,
          ...t.payload.doc.data()
        };
      });
      this.listaEquiposOeste = this.listaEquipos.filter(listaEquipos =>listaEquipos.conferencia == "oeste");
      this.listaEquiposEste = this.listaEquipos.filter(listaEquipos =>listaEquipos.conferencia == "este");
     // console.log(this.listaEquipos);
    });
  }

}
