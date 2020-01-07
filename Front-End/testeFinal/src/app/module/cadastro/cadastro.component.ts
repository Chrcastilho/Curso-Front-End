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

  public estadoList = [
    { id: 1, uf: 'AC' },
    { id: 2, uf: 'AL' },
    { id: 3, uf: 'AP' },
    { id: 4, uf: 'AM' },
    { id: 5, uf: 'BA' },
    { id: 6, uf: 'CE' },
    { id: 7, uf: 'DF' },
    { id: 8, uf: 'ES' },
    { id: 9, uf: 'GO' },
    { id: 10, uf: 'MA' },
    { id: 11, uf: 'MT' },
    { id: 12, uf: 'MS' },
    { id: 13, uf: 'MG' },
    { id: 14, uf: 'PA' },
    { id: 15, uf: 'PB' },
    { id: 16, uf: 'PR' },
    { id: 17, uf: 'PE' },
    { id: 18, uf: 'PI' },
    { id: 19, uf: 'RJ' },
    { id: 20, uf: 'RN' },
    { id: 21, uf: 'RS' },
    { id: 22, uf: 'RO' },
    { id: 23, uf: 'RR' },
    { id: 24, uf: 'SC' },
    { id: 25, uf: 'SP' },
    { id: 26, uf: 'SE' },
    { id: 27, uf: 'TO' },
  ]

  public sexoList = [
    { id: 1, sexo: 'M' },
    { id: 2, sexo: 'F' }
  ]

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  creatForm(Cadastro: Cadastro) {
    this.formCadastro = this.fb.group({
      nome: [
        'Teste Nome',
        Validators.compose([
          Validators.required,
          Validators.maxLength(200)
        ])],
      sobreNome: [
        'Teste Sobre Nome',
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
        16,
        Validators.compose([
          Validators.required
        ])],
      cidade: [
        'Maringa',
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
      uf: [16],
      cidade: [''],
    })
  }

  cancelButton() {
    this.resetForm;
    this.router.navigate(['cadastro']);
  }

  saveButton() {
    if (this.formCadastro.valid) {
      this.router.navigate(['cadastro']);
      this.allUsersData();
    }
    else {
      Object.keys(this.formCadastro.controls).filter((controlName) => {
        if (this.formCadastro.controls[controlName].invalid) {
          alert(`${controlName} e obrigatorio`);
        }
      })
    }
  }

  onSubmit() {
  }

  private allUsersData() {
    const nome = this.formCadastro.get('nome').value;
    const sobreNome = this.formCadastro.get('sobreNome').value;
    const idade = this.formCadastro.get('idade').value;
    const sexo = this.formCadastro.get('sexo').value;
    const estado = this.formCadastro.get('estado').value;
    const estadoCivil = this.formCadastro.get('estadoCivil').value;
    const endereco = this.formCadastro.get('endereco').value;
    const numero = this.formCadastro.get('numero').value;
    const complemento = this.formCadastro.get('complemento').value;
    const uf = this.formCadastro.get('uf').value;
    const cidade = this.formCadastro.get('cidade').value;
  }
}
export class Cadastro {
  email: string = '';
  senha: string = '';
}  
