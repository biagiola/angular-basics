import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<div>
                        <h2>11 - {{text}}</h2>
                        <input [(ngModel)]="name"  type="text">
                        {{ name }}
                    </div><br/>`,
  styles: [`
    div{
      background: #cdcdcd;
      padding: 3rem;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class TwoWayBinding {

  public text: string = 'Two way binding';
  public name: any = "";
  
} 