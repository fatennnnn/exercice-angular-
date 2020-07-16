import { Component, OnInit } from '@angular/core';

export interface Person {
  name: string;
  age: number;
  cin: string;
  weight: number;
}

const ELEMENT_DATA: Person[] = [{name : "Faten", age : 25, cin : "0939393", weight:78}, {name : "Akrem", age : 33, cin : "09393934" ,weight:85}];

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'cin','weight'];
  persons = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(name) {
    alert("Bonjour  " + name);
  }

}
