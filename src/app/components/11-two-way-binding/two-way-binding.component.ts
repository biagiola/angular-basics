import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<div>
                        <h2>Welcome {{text}}</h2>
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

  public text: string = 'Two Way Binding';
  public name: any = "";
  
} 