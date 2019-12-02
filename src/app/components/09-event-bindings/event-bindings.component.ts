import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<div>
                        <h2>Welcome {{text}}</h2>
                        <button (click)="onClick($event)">Greet01</button>
                        {{ greeting }}
                        <button (click)="greeting='Hi there' ">Greet02</button> 
                        
                    </div>`,
  styles: [`
    div{
      background: #cdcdcd;
      padding: 3rem;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class EventBinding {

  public text: string = 'Events Bindings';
  public greeting ="";
  
  onClick(event) {
      console.log(event);
      this.greeting = "event.type: " + event.type;
  }

}