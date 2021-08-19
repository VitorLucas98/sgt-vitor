import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { Tarefa } from 'src/app/models/tarefa';
import { ResponsavelService } from 'src/app/services/responsavel.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  id_tarefa = ''
  responsavel: Responsavel = {
    id: '',
    nome: '',
    email: ''
  }

  tarefa: Tarefa = {
    id: '',
    titulo: '',
    tipoTarefa: '',
    dataInicial: '',
    dataPrevista: '',
    dataEfetiva: '',
    status: '',
    comentarios: [],
    idResponsavel: ''
  }

  constructor(private router : Router, 
              private service : TarefaService, 
              private responsavelService : ResponsavelService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tarefa = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id_tarefa).subscribe(res =>{
      this.tarefa = res;
      this.responsavelService.findById(this.tarefa.idResponsavel).subscribe(resposta =>{
        this.responsavel = resposta
        this.tarefa.idResponsavel = this.responsavel.nome
      })
    })
  }


  delete(): void{
      this.service.delete(this.id_tarefa).subscribe(res =>{
        this.service.message('Tarefa deletada com sucesso!');
        this.router.navigate(['tarefas'])
      }, err =>{
        console.log(err)
      })
  }

  cancel(): void{
    this.router.navigate(['tarefas'])
  }
}
