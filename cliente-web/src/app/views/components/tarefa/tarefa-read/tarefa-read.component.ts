import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { ResponsavelService } from 'src/app/services/responsavel.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefa-read',
  templateUrl: './tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})
export class TarefaReadComponent implements AfterViewInit {

  tarefas: Tarefa[] = [];

  tarefaUnic!: Tarefa;


  displayedColumns: string[] = ['id', 'titulo', 'tipoTarefa', 'dataInicial', 'dataPrevista', 
  'dataEfetiva', 'status', 'idResponsavel', 'comentarios', 'action'];
  dataSource = new MatTableDataSource<Tarefa>(this.tarefas);
  
  constructor(private service: TarefaService, private router : Router, private responsavelService : ResponsavelService)  { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.tarefas = resposta;
      this.listarResponsaveis();
      this.dataSource = new MatTableDataSource<Tarefa>(this.tarefas);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['tarefas/create'])
  }

  listarResponsaveis():void{
    this.tarefas.forEach(x =>{
      this.responsavelService.findById(x.idResponsavel).subscribe(res =>{
        console.log(res)
        x.idResponsavel = res.nome
      })
    })
  }

  findComents(element:Tarefa):void{
    this.tarefaUnic = element;
    this.router.navigate(['tarefas/comentarios'])
  }

  status(x: any){
    if (x == 'A_FAZER') {
      return 'fazer';
    } else if (x == 'FAZENDO') {
      return 'fazendo'
    }else{
      return 'feito'
    }
  }
}

