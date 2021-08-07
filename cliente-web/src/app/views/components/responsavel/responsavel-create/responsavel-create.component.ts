import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel';
import { ResponsavelService } from 'src/app/services/responsavel.service';

@Component({
  selector: 'app-responsavel-create',
  templateUrl: './responsavel-create.component.html',
  styleUrls: ['./responsavel-create.component.css']
})
export class ResponsavelCreateComponent implements OnInit {

  responsavel: Responsavel = {
    id: '',
    nome: '',
    email: ''
  }

  nome = new FormControl('', [Validators.minLength(5)]);
  email = new FormControl('', [Validators.minLength(10)]);

  constructor(private router : Router, private service : ResponsavelService) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.router.navigate(['responsaveis'])
  }

  create(): void{
    this.service.create(this.responsavel).subscribe((res) => {
      this.router.navigate(['responsaveis'])
      this.service.message('Responsavel criado com sucesso!')
    }, erro =>{
      if (erro.error.error.match('já cadastrado')) {
        this.service.message(erro.error.error)
      }
    })
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

