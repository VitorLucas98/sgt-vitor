import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsavelCreateComponent } from './views/components/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelDeleteComponent } from './views/components/responsavel/responsavel-delete/responsavel-delete.component';
import { ResponsavelReadComponent } from './views/components/responsavel/responsavel-read/responsavel-read.component';
import { ResponsavelUpdateComponent } from './views/components/responsavel/responsavel-update/responsavel-update.component';
import { TarefaCreateComponent } from './views/components/tarefa/tarefa-create/tarefa-create.component';
import { TarefaReadComponent } from './views/components/tarefa/tarefa-read/tarefa-read.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
