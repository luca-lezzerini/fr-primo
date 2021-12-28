import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // (variabile) proprietà contatore
  contatore: number = 0;

  incrementa(){
    console.log("Siamo nella funzione Incrementa con contatore = ", this.contatore);
    this.contatore = this.contatore + 1;
  }

  decrementa(){
    console.log("Siamo nella funzione Decrementa con contatore = ", this.contatore);
    this.contatore = this.contatore - 1;
  }

}
