import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel.service';

@Component({
  selector: 'app-responsavel-update',
  templateUrl: './responsavel-update.component.html',
  styleUrls: ['./responsavel-update.component.css']
})
export class ResponsavelUpdateComponent implements OnInit {
  id_responsavel = ''

  responsavel: Responsavel = {
    id: '',
    nome: '',
    email: ''
  }

  nome = new FormControl('', [Validators.minLength(5)]);
  email = new FormControl('', [Validators.minLength(10)]);

  constructor(private router : Router, private service : ResponsavelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_responsavel = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  findById():void{
    this.service.findById(this.id_responsavel).subscribe(res =>{
      this.responsavel = res;
    })
  }

  update():void{
    this.service.update(this.responsavel).subscribe((res) =>{
      this.router.navigate(['responsaveis']);
      this.service.message('Responsavel atualizado com sucesso!');
    }, err =>{
      if (err.error.error.match('Erro de integridade referencial!')) {
        this.service.message('Email já cadastrado')
      }else if (err.error.erros[0].message.match('Email inválido!')) {
        this.service.message(err.error.erros[0].message)
      }
      console.log(err)
    })
  }  

  cancel(): void{
    this.router.navigate(['responsaveis'])
  }

  errorValidName() {
    if(this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }
  errorValidEmail() {
    if(this.email.invalid) {
      return 'O email deve ter mais de 10 caracteres';
    }
    return false;
  }
}
