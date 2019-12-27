import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-cadastro-pessoa',
	templateUrl: './cadastro-pessoa.component.html',
	styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

	public novoRegistro: FormGroup;

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

	dataPadrao: string = '1992-08-23';

	constructor(private fb: FormBuilder) { }

	ngOnInit() {

		let datePipe: DatePipe = new DatePipe('pt-BR');

		this.novoRegistro = this.fb.group({
			nome: '',
			sobrenome: '',
			dataNascimento: datePipe.transform(this.dataPadrao, 'dd/MM/yyyy'),
			telefone: '',
			endereco: '',
			numero: '',
			complemento: '',
			bairro: '',
			estado: 16,
			cidade: 'Maringá',
		})


	}

}
