import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { CadastroPessoaModule } from './modules/cadastro-pessoa/cadastro-pessoa.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LoginModule,
		CadastroPessoaModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
