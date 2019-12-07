import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from './home/alumno';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://ec2-54-198-45-95.compute-1.amazonaws.com"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getAllAlumnos(): Observable<any>{
    return this.http.get(this.baseurl + '/sistemasoperativos/admin/alumnos_lista/', 
    {headers: this.httpHeaders})
  }

  getOneAlumno(id): Observable<any>{
    return this.http.get(this.baseurl + '/sistemasoperativos/admin/alumnosviewdetail/' +id, 
    {headers: this.httpHeaders})
  }
  
  deleteAlumno(id): Observable<any>{
    return this.http.delete(this.baseurl + '/sistemasoperativos/admin/alumnos_detail/' + id,
    {headers: this.httpHeaders});
  }

  filterCarrera(carrera): Observable<any>{
    return this.http.get(this.baseurl + '/sistemasoperativos/admin/alumnosviewdetailcarrera/' + carrera, 
    {headers: this.httpHeaders})
  }

  filterNombre(nombre): Observable<any>{
    return this.http.get(this.baseurl + '/sistemasoperativos/admin/alumnosviewdetailnombre/'+ nombre, 
    {headers: this.httpHeaders})
  }

  filterEdad(edad): Observable<any>{

    return this.http.get(this.baseurl + '/sistemasoperativos/admin/alumnosviewdetailedad/' + edad, 
    {headers: this.httpHeaders})
  }

  createAlumno(alumno): Observable<any>{
    const body = {
      nombre: alumno.nombre, 
      apellidos: alumno.apellidos,
      edad: Number(alumno.edad), 
      sexo: alumno.sexo,
      direccion: alumno.direccion,
      carrera_id: Number(alumno.carrera)
    };
    return this.http.post(this.baseurl + '/sistemasoperativos/admin/alumnos_lista/', body,
    {headers: this.httpHeaders});
  }

  login(login): Observable<any>{
    const body = {
      username: login.username,
      password: login.password
    };
    return this.http.post(this.baseurl + '/sistemasoperativos/login', body,
    {headers: this.httpHeaders});
  }

  updateAlumno(id, alumno): Observable<any>{
    const body = {
      id: id,
      nombre: alumno.nombre, 
      apellidos: alumno.apellidos,
      edad: Number(alumno.edad), 
      sexo: alumno.sexo,
      direccion: alumno.direccion,
      carrera_id: Number(alumno.carrera)
    };
    return this.http.put(this.baseurl + '/sistemasoperativos/admin/alumnos_detail/' + id, JSON.stringify(body), 
    {headers: this.httpHeaders});
  }
}
