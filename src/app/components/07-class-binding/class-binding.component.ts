import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<div>
                        <h3>7 - {{text}}</h3>
                        <p [class]="successClass"> {{text}} </p>
                        <p [class.text-danger]="hasError">Condicional class 01</p>
                        <p [ngClass]="messageClasses">Condicional class 02</p>
                    </div>
                    <br/>`,
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

  public text: string = 'Class binding';

  public successClass = 'text-success';
  public dangeClass = 'text-danger';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

}