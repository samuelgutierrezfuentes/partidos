import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  busquedaCiudad( ciudad: string ): void {
    this.router.navigate(['/busquedaciudad'], { queryParams: { cuidad: ciudad } });
  }

  busquedaNacion(nacion: string): void {
    this.router.navigate(['/busquedanacionalidad'], { queryParams: { nacion } });

  }

}
