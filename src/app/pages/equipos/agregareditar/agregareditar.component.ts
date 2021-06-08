import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipos } from '../../../model/equipos.model';
import { FuncionesService } from '../../../servicios/funciones.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregareditar',
  templateUrl: './agregareditar.component.html',
  styles: [
  ]
})
export class AgregareditarComponent implements OnInit {

  id:string;
  equipo: Equipos = {equipoid:'0', nombre:'', ciudad:''};

  constructor( private route: ActivatedRoute, private funcionesService: FuncionesService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( params =>{

     this.id = params.get("id");

      if(this.id != '0'){

        this.cargarDatos(this.id);
      }else{

        const d1 = new Date();
        const nuevoId = d1.getTime();
        this.id = nuevoId.toString();

      }
    });
  }

  cargarDatos(id:string){
    this.funcionesService.obtenerEquipoPorId(id)
    .subscribe( equipos => {

      this.equipo =  {
          id: equipos.payload.id,
          ...equipos.payload.data()
        };

    });


  }

  agregarEditar(nombre:string, ciudad:string){

        this.funcionesService.agregarEditarEquipo(this.id, nombre, ciudad);
        this.router.navigate(['/equipos'], { });
  }

}
