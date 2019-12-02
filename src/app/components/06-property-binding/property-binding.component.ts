import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  template: `<div>
              <input [disabled]="isDesabled01" [id]="myId01" type="text" [value]="valueProperty01">
              <input [disabled]="isDesabled02" id={{myId02}} type="text" value={{valueProperty02}}>
            </div>
            <br/>`,
  styles: [`
    div{
      background: #cdcdcd;
      padding: 3rem;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class BindingProperty {

  public myId01: string = 'firstName';
  public valueProperty01: string = 'Enter first name';
  public isDesabled01: boolean = true;

  public myId02: string = 'firstName';
  public valueProperty02: string = 'Enter last name';
  public isDesabled02: boolean = false;

}