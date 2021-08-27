import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class DataTarefaService {
   private tarefa: Tarefa = {
    id: '',
    titulo: '',
    tipoTarefa: '',
    dataInicial: '',
    dataPrevista: '',
    dataEfetiva: '',
    status: '',
    comentarios: [],
    idResponsavel: ''
  };

  constructor() { }

  setTarefa( tarefa : Tarefa){
    this.tarefa = tarefa;
  }

  getTarefa() {
    return this.tarefa;
  }
}
