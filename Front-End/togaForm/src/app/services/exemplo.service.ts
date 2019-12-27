import { Injectable } from "@angular/core";

@Injectable()
export class ExemploService {

	public texto = '';

	retornaTexto() {
		alert(this.texto);
	}

	defineTexto(x: string) {
		this.texto = x;
	}

}