import { Component, Input, OnInit } from '@angular/core';
import { DataTarefaService } from 'src/app/data-tarefa.service';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-comentario-read',
  templateUrl: './comentario-read.component.html',
  styleUrls: ['./comentario-read.component.css']
})
export class ComentarioReadComponent implements OnInit {

  @Input() tarefa!: Tarefa;

  constructor(private dataTarefaService: DataTarefaService) { }

  ngOnInit(): void {
    this.tarefa = this.dataTarefaService.getTarefa();
    console.log(this.tarefa);
  }

}
