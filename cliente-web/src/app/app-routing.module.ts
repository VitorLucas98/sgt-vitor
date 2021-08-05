import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsavelReadComponent } from './views/components/responsavel/responsavel-read/responsavel-read.component';
import { TarefaReadComponent } from './views/components/tarefa/tarefa-read/tarefa-read.component';
import { HomeComponent } from './views/components/template/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'tarefas',
    component: TarefaReadComponent
  },
  {
    path:'responsaveis',
    component: ResponsavelReadComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
