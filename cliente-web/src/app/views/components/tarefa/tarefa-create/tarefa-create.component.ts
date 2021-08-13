import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { Tarefa } from 'src/app/models/tarefa';
import { ResponsavelService } from 'src/app/services/responsavel.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

  responsaveis: Responsavel[] = []

  horarioInicial : String = '';
  horarioPrevisto : String = '';

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

  constructor(private router : Router, private reponsavelService : ResponsavelService, private service : TarefaService) { }

  ngOnInit(): void {
    this.listaReponsaveis();
  }

  titulo = new FormControl('', [Validators.minLength(5)]);
  tipoTarefa = new FormControl('', [Validators.minLength(5)]);
  dataInicial = new FormControl('', [Validators.minLength(8)]);
  dataPrevista = new FormControl('', [Validators.minLength(8)]);
  dataEfetiva = new FormControl('', [Validators.minLength(8)]);
  status = new FormControl('', [Validators.minLength(5)]);

  cancel(): void {
    this.router.navigate(['tarefas'])
  }

  listaReponsaveis(): void{
    this.reponsavelService.findAll().subscribe(res =>{
      this.responsaveis = res;
    })
  }

  create(): void {
    this.service.create(this.tarefa).subscribe(res => {
     // let newDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local();
      this.tarefa.dataInicial = this.dataInicial 

    })
  }

  errorValidTitulo() {
    if (this.titulo.invalid) {
      return 'O titulo deve ter entre 5 e 20 caracteres!';
    }
    return false;
  }

  errorValidTipoTarefa() {
    if (this.tipoTarefa.invalid) {
      return 'O Tipo de tarefa deve ter entre 5 e 20 caracteres!';
    }
    return false;
  }

  errorValidDataInicial() {
    if (this.dataInicial.invalid) {
      return 'Data invalida';
    }
    return false;
  }

  errorValidDataPrevista() {
    if (this.dataPrevista.invalid) {
      return 'Data invalida';
    }
    return false;
  }

  errorValidDataEfetiva() {
    if (this.dataEfetiva.invalid) {
      return 'Data invalida';
    }
    return false;
  }
}
