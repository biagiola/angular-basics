import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directives',
  template: `<div>
                        
                        <h2 *ngIf="true">12 - {{text}}</h2>
                        <h2 *ngIf="false">This h2 dont show it</h2>
                        
                        <h2 *ngIf="displayOne; else elseBlock">
                            if block entered - *ngIf=" ";
                        </h2>
                        <ng-template #elseBlock>
                            <h2>
                                elseBlock entered - #elseBlock
                            </h2>
                        </ng-template> 

                        <div *ngIf="displayTwo; then thenBlock; else elseBlock"></div>
                        <ng-template #thenBlock>
                            <h2>thenBlock show</h2>
                        </ng-template>
                        <ng-template #elseBlock>
                            <h2>elseBlock show</h2>
                        </ng-template>
                        
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
export class ngIfDirective {

  public text: string = 'ng if directives';

  displayOne: boolean = false;  
  displayTwo: boolean = false;  
  
} 