import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroPessoaComponent
  ],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
    CadastroPessoaRoutingModule
  ],
  exports: [
    CadastroPessoaComponent
  ]
})
export class CadastroPessoaModule { }
