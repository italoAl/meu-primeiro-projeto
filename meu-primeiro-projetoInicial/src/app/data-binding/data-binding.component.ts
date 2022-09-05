import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: String="italo";
  public idade: number= 25;
  public checkedDisabled: boolean= false;
  public imgSrc: String= "https://br.web.img3.acsta.net/pictures/17/11/06/14/13/5164749.jpg?coixp=50&coiyp=47";

  constructor() { }

  ngOnInit(): void {
  }

}
