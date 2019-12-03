import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  template: `<div>
                        <h2>Welcome {{text}}</h2>
                        <input #myInput type="text">
                        <button (click)="logMessage(myInput.value)">Log</button>
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
export class TemplateReferenceVariables {

  public text: string = 'Template Reference Variables';
  
  logMessage(value) {
    alert(value);    
  }

} 