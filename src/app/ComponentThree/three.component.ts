import { Component } from '@angular/core';

@Component({
  selector: '[component-3]', // delcaring as a property 
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ComponentThree {
  name: string = "Oscar"
}