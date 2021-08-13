import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Responsavel } from '../models/responsavel';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private snack : MatSnackBar) { }

  findAll():Observable<Responsavel[]>{
    const url = `${this.baseUrl}/responsaveis`
    return this.http.get<Responsavel[]>(url);
  }

  findById(id : any):Observable<Responsavel>{
    const url = `${this.baseUrl}/responsaveis/${id}`
    return this.http.get<Responsavel>(url);
  }

  create(responsavel : Responsavel): Observable<Responsavel>{
    const url = `${this.baseUrl}/responsaveis`
    return this.http.post<Responsavel>(url, responsavel);
  }

  update(responsavel : Responsavel): Observable<Responsavel>{
    const url = `${this.baseUrl}/responsaveis/${responsavel.id}`
    return this.http.put<Responsavel>(url, responsavel);
  }

  delete(id : any): Observable<void>{
    const url = `${this.baseUrl}/responsaveis/${id}`
    return this.http.delete<void>(url);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition:'top',
      duration: 4000
    })
  }

}
