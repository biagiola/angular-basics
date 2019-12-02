import { Component } from '@angular/core';

@Component({
  selector: '[app-box-one]', // selecting as a property
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css']
})
export class BoxOneComponent {

    number: string = 'one';

}
