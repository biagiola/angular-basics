import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directives',
  template: `<div>

                        <h2>13 - {{text}}</h2>

                        <div [ngSwitch]="color">
                            <div *ngSwitchCase=" 'red' ">You picked red color</div>
                            <div *ngSwitchCase=" 'blue' ">You picked blue color</div>
                            <div *ngSwitchCase=" 'green' ">You picked green color</div>
                            <div *ngSwitchDefault>Pick again</div>
                        </div>

                    </div><br/>`,
  styles: [`
    div {
      background: #cdcdcd;
      padding: 1rem;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class ngSwitchDirective {

  public text: string = 'ng Switch Directives';
  public color: string = "yellow";
  
} 