import { Component } from '@angular/core';

@Component({
  selector: 'component-1', 
  templateUrl: './one.component.html',
  /*
    template: `<div>
                Inline template
              </div>`
  */
  styleUrls: ['./one.component.css']
})
export class ComponentOne {
  name: string = "Andrew"
}
