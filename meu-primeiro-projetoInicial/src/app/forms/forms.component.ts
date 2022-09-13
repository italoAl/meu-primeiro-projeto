import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas : Array<{comida: string, preco: string}>= [
  {comida: "X-Salada", preco: "10,00"},
  {comida: "X-Bacon", preco: "11,00"},
  {comida: "Coxinha", preco: "12,00"}
  ];
  public submitForm(form: NgForm){
    if (form.valid){
    console.log(form.value)
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
