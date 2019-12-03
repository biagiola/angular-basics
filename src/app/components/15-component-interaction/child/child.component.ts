import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [`
    div {
      background: #cdcdcd;
      padding: 3px;
      text-align: center;
      font-family: lato;
    }`]
})
export class ChildComponent implements OnInit {

  @Input() public parentData: string;

  constructor() { }

  ngOnInit() {
  }

}
