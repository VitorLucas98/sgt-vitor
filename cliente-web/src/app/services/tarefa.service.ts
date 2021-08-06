import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Tarefa[]>{
    const url = this.baseUrl + '/tarefas'
    return this.http.get<Tarefa[]>(url);
  }
}
