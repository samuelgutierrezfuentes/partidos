import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../servicios/funciones.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styles: [
  ]
})
export class HeadercomponentComponent implements OnInit {

  constructor(public funcionesService: FuncionesService) { }

  ngOnInit(): void {
  }

}
