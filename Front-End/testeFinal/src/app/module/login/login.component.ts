import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formConta: FormGroup;

  ngOnInit() {
    this.creatForm(new Conta());  
  }

  constructor() { }

  creatForm(conta: Conta){
    this.formConta = new FormGroup({
      email: new FormControl(conta.email),
      senha: new FormControl(conta.senha)
    })
  }

  onSubmit(){
    console.log(this.formConta.value);
  }
}

export class Conta{
  email: string = '';
  senha: string = '';
  }  
