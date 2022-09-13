import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `   
  <!-- <app-diretivas-atributos>
  <h1>Aulas de Diretivas Atributos </h1>
  <h3>Final da aula</h3>
  </app-diretivas-atributos>

 <app-diretivas-atributos>
 <h1>Italo A.</h1>
 <h3>Gordo</h3>
 </app-diretivas-atributos> 
 
 <ng-template [ngIf]="getDados">
 <h1>{{getDados.nome}}</h1>
 <h2>{{getDados.idade}}</h2>
 </ng-template>
 <app-output (enviarDados)="setDados($event)"></app-output>
 <app-new-component></app-new-component>
 <app-input [contador] = "addValue"></app-input>
 <button (click)= "add()">Botão Add</button>  
 
 <app-food-list></app-food-list>
 <app-food-add></app-food-add>
  --> 
  <app-forms></app-forms>
 <router-outlet></router-outlet>
 `
})
export class AppComponent implements OnInit {

  public condition: boolean = true;
  public addValue: number= 1;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() {

  }
  ngOnInit(): void {
    
    setInterval( ()=>{
      this.condition = false;
    }, 2000 );
  }
  title = 'meu-primeiro-projeto';
  
  public add() {
    this.addValue += 1*10-7;
  }
  public setDados(event: {nome: string, idade: number }) {
      this.getDados = event;
  }
}


