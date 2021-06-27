import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../servicios/funciones.service';
import {GestionEquiposService} from '../servicios/gestionEquipos.service';

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
  constructor(private funcionesService: GestionEquiposService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.funcionesService.equiposClasificados()
      .subscribe( data => {
        this.listaEquipos = data.clasificados;
        this.listaEquiposOeste = this.listaEquipos.filter(listaEquipos => listaEquipos.zona === 'oeste');
        this.listaEquiposEste = this.listaEquipos.filter(listaEquipos => listaEquipos.zona === 'este');
        // console.log(this.listaEquipos);
      });
  }

}
