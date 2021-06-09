import { Component, OnInit } from '@angular/core';
import { Equipos } from '../../model/equipos.model';
import {GestionEquiposService} from '../../servicios/gestionEquipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styles: [
  ]
})
export class EquiposComponent implements OnInit {
  equipos: Equipos[] = [];

  constructor(private funcionesService: GestionEquiposService) { }

  ngOnInit(): void {
   this.cargarEquipos();
  }

  public cargarEquipos(): void{
    this.funcionesService.obtener()
    .subscribe(d => {
      this.equipos = d.equipos;
    });
  }

  eliminar(id: string): any {
    this.funcionesService.eliminarEquipo(id)
      .subscribe(d => {
        console.log(d.msg);
        this.cargarEquipos();
      });
    alert('El registro ha sido eliminado correctamente');
  }
  favorito(id: string, favorito: boolean): any {
    this.funcionesService.equipoFavorito(id, favorito)
      .subscribe(d => {
        this.cargarEquipos();
      });
  }


}
