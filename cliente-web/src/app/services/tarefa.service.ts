import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Tarefa[]>{
    const url = this.baseUrl + '/tarefas'
    return this.http.get<Tarefa[]>(url);
  }

  create(tarefa : Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/tarefas`;
    return this.http.post<Tarefa>(url, tarefa);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
