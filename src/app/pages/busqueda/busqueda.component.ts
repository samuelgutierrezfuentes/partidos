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

  busquedaCiudad(ciudad:String){

    this.router.navigate(['/busquedaciudad'], { queryParams: { cuidad: ciudad } });
  }

  busquedaNacion(nacion:String){

    //alert(ciudad);
    //this.router.navigateByUrl('/busquedaciudad');
    this.router.navigate(['/busquedanacionalidad'], { queryParams: { nacion: nacion } });

  }

}
