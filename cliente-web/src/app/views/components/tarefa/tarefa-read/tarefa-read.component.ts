import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataTarefaService } from 'src/app/services/data-tarefa.service';
import { Tarefa } from 'src/app/models/tarefa';
import { ResponsavelService } from 'src/app/services/responsavel.service';
import { TarefaService } from 'src/app/services/tarefa.service';
import { ComentarioReadComponent } from '../../comentario/comentario-read/comentario-read.component';

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
  
  constructor(private service: TarefaService, 
              private router : Router, 
              private responsavelService : ResponsavelService,
              public dialog: MatDialog,
              private dataTarefaService : DataTarefaService)  { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAll();
  }

  openDialog(element:Tarefa) {
    this.dataTarefaService.setTarefa(element);
    const dialogRef = this.dialog.open(ComentarioReadComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
        x.idResponsavel = res.nome
      })
    })
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

