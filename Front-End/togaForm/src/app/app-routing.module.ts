import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverComponent } from './modules/recover/recover.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroPessoaComponent } from './modules/cadastro-pessoa/cadastro-pessoa.component';


const routes: Routes = [
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'recover', component: RecoverComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cadastro-pessoa', component: CadastroPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
