import { Component, OnInit, NgModule} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent  implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true
  public list: Array<{ nome: string, idade: number}> = [
  { nome: "italo gordo", idade: 25 },
  { nome: "andre fdp", idade: 100 },
  { nome: "joão estudos", idade: 29 },
  { nome: "diego atleta", idade: 69 }
];
  public nome: string = 'dener';
  constructor() { }
  ngOnInit(): void {
    setInterval( ()=>{
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 5000);
  }
  public onClickAddList(){
    this.list.push({nome: "asfs", idade: 84 });
  }
  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }
public onClick(){
  if (this.conditionClick) {
  this.conditionClick = false;
}  else {
  this.condition = true;
    }
  }
}
