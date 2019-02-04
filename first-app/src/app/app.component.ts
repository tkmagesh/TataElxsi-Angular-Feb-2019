import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  currentTime = Date();

  constructor(){
  	setTimeout(() => {
  		this.title = 'A New App'
  	}, 5000);

  	setInterval(() => {
  		this.currentTime = Date();
  	},1000);
  }
}
