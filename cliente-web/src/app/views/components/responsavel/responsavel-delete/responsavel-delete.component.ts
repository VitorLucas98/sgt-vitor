import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel.service';

@Component({
  selector: 'app-responsavel-delete',
  templateUrl: './responsavel-delete.component.html',
  styleUrls: ['./responsavel-delete.component.css']
})
export class ResponsavelDeleteComponent implements OnInit {
  id_responsavel = ''

  responsavel: Responsavel = {
    id: '',
    nome: '',
    email: ''
  }

  constructor(private router : Router, private service : ResponsavelService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id_responsavel = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void{
    this.service.findById(this.id_responsavel).subscribe(res =>{
      this.responsavel = res;
    })
  }

  delete():void{
    this.service.delete(this.id_responsavel).subscribe((res) =>{
      this.router.navigate(['responsaveis']);
      this.service.message('Responsavel deletado com sucesso!');
    }, err =>{
      if (err.error.error.match('Erro de integridade referencial!')) {
        this.service.message('Não é possivel deletar um responsavel que possui tarefas associadas')
      }
    })
  }


  cancel(): void{
    this.router.navigate(['responsaveis'])
  }
}
