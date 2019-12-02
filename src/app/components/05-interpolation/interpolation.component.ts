import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `<div>
              <h3>Welcome {{ name }}</h3>
              <h3>{{'2*2 = '+ 2*2}}</h3>
              <h3>{{'Name length = ' + name.length }}</h3>
              <h3>{{name.toUpperCase()}}</h3>
              <h3>{{greetUser()}}</h3>
              <h3>{{ siteUrl }}</h3>
              <!-- this is wrong
                <h3>{{a = 2+2}}</h3> // we cannot do assignments
                <h3>window.location.href</h3> // global js variables dont exists
              -->
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
export class Interpolation {
  
  public name: string = 'John';
  public siteUrl = window.location.href;

  greetUser(){
    return 'Hello ' + this.name;
  }
}