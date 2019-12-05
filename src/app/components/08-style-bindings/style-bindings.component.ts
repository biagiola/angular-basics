import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `<div>
                        <h2 [style.color]="'orange'">8 - Style Bindings</h2>
                        <h2 [style.color]="hasError ? 'red' : 'green' ">{{ text }}</h2>
                        <h2 [style.color]="highlightColor">Style Bindings 02</h2>
                        <h2 [ngStyle]="titleStyles">Style Bindings 03</h2> 
                    </div><br/>`,
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
export class StyleBinding {

  public text: string = 'This is an success example test';
  
  public hasError = false;
  public highlightColor = "pink";
  
  public titleStyles = {
      color: 'blue',
      fontStyle: 'italic'
  }
  

}