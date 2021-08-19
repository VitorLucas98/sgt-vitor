import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioReadComponent } from './views/components/comentario/comentario-read/comentario-read.component';
import { ResponsavelCreateComponent } from './views/components/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelDeleteComponent } from './views/components/responsavel/responsavel-delete/responsavel-delete.component';
import { ResponsavelReadComponent } from './views/components/responsavel/responsavel-read/responsavel-read.component';
import { ResponsavelUpdateComponent } from './views/components/responsavel/responsavel-update/responsavel-update.component';
import { TarefaCreateComponent } from './views/components/tarefa/tarefa-create/tarefa-create.component';
import { TarefaDeleteComponent } from './views/components/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaReadComponent } from './views/components/tarefa/tarefa-read/tarefa-read.component';
import { TarefaUpdateComponent } from './views/components/tarefa/tarefa-update/tarefa-update.component';
import { HomeComponent } from './views/components/template/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'responsaveis',
    component: ResponsavelReadComponent
  },
  {
    path:'responsaveis/create',
    component: ResponsavelCreateComponent
  },
  {
    path:'responsaveis/update/:id',
    component: ResponsavelUpdateComponent
  },
  {
    path:'responsaveis/delete/:id',
    component: ResponsavelDeleteComponent
  },
  {
    path:'tarefas',
    component: TarefaReadComponent
  },
  {
    path:'tarefas/create',
    component: TarefaCreateComponent
  },
  {
    path:'tarefas/update/:id',
    component: TarefaUpdateComponent
  },
  {
    path:'tarefas/delete/:id',
    component: TarefaDeleteComponent
  },
  {
    path:'tarefas/comentarios',
    component: ComentarioReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
