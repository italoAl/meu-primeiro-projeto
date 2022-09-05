import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  
  @Output() public enviarDados = new EventEmitter();
  public lista: Array<{nome: string, idade: number}>=[
  {nome:"italo", idade: 25},
  {nome:"gordo", idade: 27},
  {nome:"ismael", idade: 26}];

  public getDados(event: number) {
    this.enviarDados.emit(this.lista[event]);
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
