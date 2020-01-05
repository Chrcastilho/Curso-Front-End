import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './module/cadastro/cadastro.component';
import { LoginComponent } from './module/login/login.component';


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
