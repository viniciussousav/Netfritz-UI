import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaFitasComponent } from './tela-fitas/tela-fitas.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: TelaLoginComponent
  },
  {
    path: 'cadastro',
    component: TelaCadastroComponent
  },
  {
    path: 'inicio',
    component: TelaInicialComponent
  },
  {
    path: 'fitas',
    component: TelaFitasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
