import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  private formCadastro: FormGroup;
  ngOnInit() {
    this.creatForm(new Cadastro());
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  validaCampos() {
    if (this.formCadastro.valid) {
      this.router.navigate(['cadastro']);
    }
    else {
      Object.keys(this.formCadastro.controls).filter((controlName) => {
        if (this.formCadastro.controls[controlName].invalid) {
          alert(`${controlName} e obrigatorio`);
        }
      })
    }
  }

  creatForm(Cadastro: Cadastro) {
    this.formCadastro = this.fb.group({
      nome: [
        'Teste Nome',
        Validators.compose([
          Validators.required,
          Validators.maxLength(200)
        ])],
      sobreNome: [
        'Teste Nome',
        Validators.compose([
          Validators.required,
          Validators.maxLength(200)
        ])],
      idade: [
        '27',
        Validators.compose([
          Validators.required,
          Validators.maxLength(30)
        ])],
      sexo: [
        1,
        Validators.compose([
          Validators.required,
        ])],
      estado: [
        'Parana',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])],
        estadoCivil: [
        'Casado',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100)
        ])],
      endereco: [
        'Rua testes',
        Validators.compose([
          Validators.required,
          Validators.maxLength(500)
        ])],
      numero: [
        '999999',
        Validators.compose([
          Validators.required,
          Validators.maxLength(999999)
        ])],
      complemento: [
        'Ed. Complemento',
        Validators.compose([
          Validators.required,
          Validators.maxLength(500)
        ])],
      uf: [
        1,
        Validators.compose([
          Validators.required
        ])],
      cidade: [
        '1',
        Validators.compose([
          Validators.required,
          Validators.maxLength(200)
        ])],
    })
  }

  resetForm(Cadastro: Cadastro) {
    this.formCadastro = this.fb.group({
      nome: [''],
      sobreNome: [''],
      idade: [''],
      sexo: [1],
      estado: [''],
      estadoCivil: [''],
      endereco: [''],
      numero: [''],
      complemento: [''],
      uf: [1],
      cidade: [''],
    })
  }

  cancelForm() {
    this.resetForm;
    this.router.navigate(['cadastro']);
  }

  onSubmit() {
    console.log(this.formCadastro.value);
  }

  get email() {
    return this.formCadastro.get('email');
  }

  get senha() {
    return this.formCadastro.get('senha');
  }

  goToCadastro() {
    this.router.navigate(['cadastro']);
  }
}

export class Cadastro {
  email: string = '';
  senha: string = '';
}  
