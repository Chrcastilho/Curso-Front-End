import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public formGroup: FormGroup;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private loginService: LoginService,
	) { }

	ngOnInit() {
		this.formGroup = this.formBuilder.group(
			{
				'email': ['admtheos@admtheos.com.br', Validators.required],
				'senha': ['282f8', Validators.required]
			}
		)
	}

	validaCampos() {
		if (this.formGroup.valid) {
			this.login();
			// this.router.navigate(['/home']);
		} else {
			Object.keys(this.formGroup.controls).filter((controlName) => {
				if (this.formGroup.controls[controlName].invalid) {
					alert(`${controlName} é obrigatório !!!`);
				}
			})
		}
	}

	private login() {
		const email = this.formGroup.get('email').value; // retorna valor do controle email
		const senha = this.formGroup.get('senha').value; // retorna valor do controle senha

		this.loginService.login(email, senha)
			.subscribe(
				(resposta) => {
					localStorage.setItem('loginToken', JSON.stringify(resposta));
					this.router.navigate(['home']);
				},
				(error) => {
					alert(error.error.error_description);
				}
			)
	}
}
