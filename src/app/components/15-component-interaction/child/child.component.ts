import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [`
    div {
      background: #cdcdcd;
      padding: 3px;
      text-align: center;
      font-family: lato;
    }`]
})
export class ChildComponent {

  /* Data coming from the parent component */
  // Way 1
  //@Input() public parentData: string;

  // Way 2
  @Input('parentData') public name: string;

  /* Sending data from the parent to the child component */
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
      this.childEvent.emit('Hey coder!');
  }

}
