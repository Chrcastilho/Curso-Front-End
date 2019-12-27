import { Component, OnInit } from '@angular/core';
import { ExemploService } from 'src/app/services/exemplo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
	const token = JSON.parse(localStorage.getItem('loginToken'));
	const accessToken = token.access_token;
	alert(accessToken);
  }

}
