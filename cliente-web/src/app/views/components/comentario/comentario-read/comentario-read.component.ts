import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-comentario-read',
  templateUrl: './comentario-read.component.html',
  styleUrls: ['./comentario-read.component.css']
})
export class ComentarioReadComponent implements AfterViewInit {


  @Input() tarefa!: Tarefa;

  displayedColumns: string[] = ['id', 'texto'];
  dataSource = new MatTableDataSource<Comentario>(this.tarefa.comentarios);

  constructor(private router : Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  return():void{
    this.router.navigate(['tarefas'])
  }
}
