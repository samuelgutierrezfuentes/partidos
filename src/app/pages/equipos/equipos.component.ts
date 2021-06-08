import { Component, OnInit } from '@angular/core';
import { Equipos } from '../../model/equipos.model';
import { FuncionesService } from '../../servicios/funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styles: [
  ]
})
export class EquiposComponent implements OnInit {
  equipos: Equipos[] = [];

  constructor(private funcionesService: FuncionesService, private router: Router) { }

  ngOnInit(): void {

   this.cargarDatos();
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
    });
  }

  eliminar(id: string) {

    this.funcionesService.eliminarEquipo(id);
    this.cargarDatos();
    alert("El registro ha sido eliminado correctamente");
  }


}
