import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directives',
  template: `<div>

                        <h2>14 - {{text}}</h2>
                        <div *ngFor="let color of colors; index as i; first as f; second as s; last as l; odd as o; even as e">
                            <h4> {{ i+1 }} - {{ color }} - first : {{ f }} - last: {{ l }} - odd: {{ o }} - even: {{ e }}</h4>
                        </div>

                    </div><br/>`,
  styles: [`
    div {
      background: #cdcdcd;
      padding: 3px;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class ngForDirective {

  public text: string = 'ng For Directives';
  
  public colors: string[] = ["red", "blue", "green", "yellow"];
  
} 