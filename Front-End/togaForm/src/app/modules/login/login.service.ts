import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

	private apiUrl = 'http://192.168.200.182:8080/EclesialParoquia/api';

	constructor(private http: HttpClient) { }

	login(email: string, senha: string): Observable<any> {
		// endpoint do backend para login v1/security/token

		let body = `grant_type=password&username=${email}&password=${senha}`;

		return this.http.post(`${this.apiUrl}/v1/security/token`, body);
	}
}
