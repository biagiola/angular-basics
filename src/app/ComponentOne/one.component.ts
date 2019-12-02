import { Component } from '@angular/core';

@Component({
  selector: 'component-1', 
  templateUrl: './one.component.html',
  /*
    template: `<div>
                Inline template
              </div>`
  */
  styleUrls: ['./one.component.css'];
  /*
    style: [`
      div{
        color: red;
        background: black
      }
    `]
  */
})
export class ComponentOne {
  name: string = "Andrew"
}
