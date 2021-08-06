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
    const url = this.baseUrl +"/responsaveis";
    return this.http.get<Responsavel[]>(url);
  }

  create(responsavel : Responsavel): Observable<Responsavel>{
    const url = this.baseUrl +"/responsaveis";
    return this.http.post<Responsavel>(url, responsavel);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition:'top',
      duration: 4000
    })
  }

}
