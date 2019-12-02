import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<div>
              <p [class]="successClass"> {{text}} </p>
              <p [class.text-danger]="hasError">Condicional class 01</p>
              <p [ngClass]="messageClasses">Condicional class 02</p>
            </div>`,
  styles: [`
    div{
      background: #cdcdcd;
      padding: 3rem;
      text-align: center;
      font-family: lato;
    }
    .text-success { color: green }
    .text-danger { color: red }
    .text-special { font-style: italic }
  `]
})
export class ClassBinding {

  public text: string = 'This is an success example test';
  public successClass = 'text-success';
  public dangeClass = 'text-danger';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

}