import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel.service';

@Component({
  selector: 'app-responsavel-read',
  templateUrl: './responsavel-read.component.html',
  styleUrls: ['./responsavel-read.component.css']
})


export class ResponsavelReadComponent implements AfterViewInit {

  responsaveis: Responsavel[] = [];


  displayedColumns: string[] = ['id', 'nome', 'email'];
  dataSource = new MatTableDataSource<Responsavel>(this.responsaveis);
  
  constructor(private service: ResponsavelService, private router : Router)  { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.responsaveis = resposta;
      console.log(resposta)
      this.dataSource = new MatTableDataSource<Responsavel>(this.responsaveis);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['responsaveis/create'])
  }

}



