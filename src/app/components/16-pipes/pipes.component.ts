import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<div>
                        <h2>{{ name }}</h2>
                        <h2>{{ name | lowercase }}</h2>
                        <h2>{{ name | uppercase }}</h2>
                        <h2>{{ message | titlecase }}</h2>
                        <h2>{{ name | slice:3:10 }}</h2>
                        <h2>{{ person | json }}</h2>

                        <h2>{{ 5.678 | number:'1.2-3' }}</h2><!-- min integer, min decimal, max decimal -->
                        <h2>{{ 5.678 | number:'3.3-3' }}</h2>
                        <h2>{{ 5.678 | number:'3.1-2' }}</h2>

                        <h2>{{ 0.25 | percent }}</h2>
                        <h2>{{ 0.25 | currency }}</h2>
                        <h2>{{ 0.25 | currency: 'GBP' }}</h2>
                        <h2>{{ 0.25 | currency: 'EUR' }}</h2>
                        <h2>{{ 0.25 | currency: 'GBP' : 'code' }}</h2>

                        <h2>{{ date }}</h2>
                        <h2>{{ date | date: 'short' }}</h2>
                        <h2>{{ date | date: 'shortDate' }}</h2>
                        <h2>{{ date | date: 'shortTime' }}</h2>

                    <div><br/>`,
  styles: [`
    div {
      background: #cdcdcd;
      padding: 3px;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class Pipes {

  public name: string = "Pipes in Angular";
  public message: string = "Welcome to to the page";
  public person = {
      "firstName" : "John",
      "lastName" : "Doe"
  }
  public date = new Date();

} 
