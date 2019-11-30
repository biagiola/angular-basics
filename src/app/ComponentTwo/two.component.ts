import { Component } from '@angular/core';

@Component({
  selector: '.component-2', // delcaring as a class
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class ComponentTwo {
  name: string = "Markus"
}