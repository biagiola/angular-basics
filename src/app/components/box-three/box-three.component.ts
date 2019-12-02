import { Component } from '@angular/core';

@Component({
  selector: '.app-box-three', // declaring as a class
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css']
})
export class BoxThreeComponent {

    number: string = 'three';
  
}
