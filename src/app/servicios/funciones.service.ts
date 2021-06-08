import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipos } from '../model/equipos.model';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  equipos: Equipos[] = [];
  equipo: Equipos ;

  public mostrarMenuClasificacion : boolean = false;
  constructor( private http: HttpClient, private firestore: AngularFirestore ) { }

  obtener(): Observable<any[]>{

    return this.firestore.collection('equipos').snapshotChanges()
  }

  obtenerClasificacion(): Observable<any[]>{

    return this.firestore.collection('clasificacion').snapshotChanges()
  }

  obtenerJugadores(): Observable<any[]>{

    return this.firestore.collection('jugadores').snapshotChanges()
  }


  obtenerEquipoPorId(id:string): Observable<any> {
    return this.firestore.collection('equipos').doc(id).snapshotChanges()
  }

  agregarEditarEquipo(id:string, nombre:string, ciudad:string) {

    let nuevoEqupo = Object.assign( {}, {'equipoid': id, 'nombre': nombre, 'ciudad': ciudad});

    return this.firestore.collection('equipos').doc(id).set(nuevoEqupo);
  }

  eliminarEquipo(id:string) {

    return this.firestore.doc('equipos/' + id).delete();
  }

}

