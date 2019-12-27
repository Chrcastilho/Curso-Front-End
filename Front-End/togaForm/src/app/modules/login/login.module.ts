import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RecoverModule } from '../recover/recover.module';
import { HomeModule } from '../home/home.module';
import { ExemploService } from 'src/app/services/exemplo.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
	CommonModule,
	FormsModule,
    LoginRoutingModule,
    RecoverModule,
	HomeModule,
	ReactiveFormsModule,
	HttpClientModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [
	  LoginService
  ]
})
export class LoginModule { }
