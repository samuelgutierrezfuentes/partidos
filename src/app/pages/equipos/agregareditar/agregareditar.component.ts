import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipos} from '../../../model/equipos.model';
import {GestionEquiposService} from '../../../servicios/gestionEquipos.service';

@Component({
  selector: 'app-agregareditar',
  templateUrl: './agregareditar.component.html',
  styles: []
})
export class AgregareditarComponent implements OnInit {

  id: string;
  equipo: Equipos = {equipoid: '0', nombre: '', ciudad: ''};

  constructor(private route: ActivatedRoute, private funcionesService: GestionEquiposService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTeam();
  }

  agregarEditar(nombre: string, ciudad: string): void {
    this.funcionesService.gestionarEquipo(this.id, nombre, ciudad)
      .subscribe(d => {
        console.log(d);
        this.router.navigate(['/equipos'], {});
      });
  }

  getTeam(): void{
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id !== '0') {
        this.funcionesService.getTeamById(this.id)
          .subscribe(d => {
            this.equipo = d.equipo;
          });
      }
    });
  }
}
