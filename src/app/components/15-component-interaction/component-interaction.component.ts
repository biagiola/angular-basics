import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `<div>
                        <h2>{{ 'Hello ' + parentDataManager }}</h2>
                    </div>`,
  styles: [`
    div {
      background: #cdcdcd;
      padding: 3px;
      text-align: center;
      font-family: lato;
    }
  `]
})
export class ComponentInteraction implements OnInit{

  @Input() public parentData;
  
  ngOnInit() {

  }

}
