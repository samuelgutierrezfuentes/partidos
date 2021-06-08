import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../../servicios/funciones.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styles: [
  ]
})
export class PartidosComponent implements OnInit {

  constructor(public funcionesService: FuncionesService) {
    funcionesService.mostrarMenuClasificacion = true;
   }

  ngOnInit(): void {
  }

}
