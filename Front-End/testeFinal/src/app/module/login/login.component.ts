import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private formConta: FormGroup;
  ngOnInit() {
    this.creatForm(new Conta());  
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

validaCampos(){
  if (this.formConta.valid) {
    this.router.navigate(['cadastro']);
    console.log('Redireciono');
  }
  else{
    Object.keys(this.formConta.controls).filter((controlName) =>{
      if(this.formConta.controls[controlName].invalid){
        alert(`${controlName} e obrigatorio`);
      }
    })
  }
}

  creatForm(conta: Conta){
    this.formConta = this.fb.group({
      email: [
        'teste@teste.com.br',
        Validators.compose([
          Validators.required,
          Validators.maxLength(200)
        ])],
        senha: [
          '123',
          Validators.compose([
            Validators.required,
            Validators.maxLength(30)
          ])],
    })
  }

  onSubmit(){
    console.log(this.formConta.value);
  }

  get email(){
    return this.formConta.get('email');
  }

  get senha(){
    return this.formConta.get('senha');
  }

  goToCadastro(){
    this.router.navigate(['cadastro']);
  }
}

export class Conta{
  email: string = '';
  senha: string = '';
  }  
