import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipos } from '../model/equipos.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.base_URL;

@Injectable({
  providedIn: 'root'
})
export class GestionEquiposService {
  equipos: Equipos[] = [];
  equipo: Equipos;

  public mostrarMenuClasificacion = false;
  constructor( private http: HttpClient ) { }

  obtener(): Observable<any>{
    return this.http.get(baseUrl + '/equipos');
  }
  gestionarEquipo(id: string, nombre: string, ciudad: string): any {
    if (id !== '0'){
      return this.http.put(baseUrl + '/equipos', { id, nombre, ciudad });
    }else{
      return this.http.post(baseUrl + '/equipos', { nombre, ciudad });
    }
  }
  getTeamById(id: string): any {
    return this.http.get(baseUrl + '/equipos/' + id);
  }
  eliminarEquipo(id: string): any {
    return this.http.delete(baseUrl + '/equipos/' + id);
  }
  equipoFavorito(id: string, favorite: boolean): any {
    favorite = !favorite;
    return this.http.put(baseUrl + '/equipos', { id, favorite });
  }

  equiposByCiudad(ciudad: string): any {
    return this.http.post(baseUrl + '/equipos/ciudad', { ciudad });
  }

  equiposClasificados(): any {
    return this.http.get(baseUrl + '/clasificados');
  }

}

