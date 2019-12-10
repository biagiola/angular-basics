import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  template: `
        <h2>Employee details</h2>
        <h3>{{ errorMsg }}</h3>
        <ul *ngFor="let employee of employees">
            <li>{{ employee.id }} - {{ employee.name }} - {{ employee.age }}</li>
        </ul>
  `,
  styles: []
})
export class EmployeeDetails implements OnInit {
  
  //public employees: employeeModel[];
  public employees = [];
  public errorMsg;

  constructor( private _employeeService: EmployeeService ) { }

  ngOnInit() {
      this._employeeService.getEmployees()
            .subscribe( data => this.employees = data,
                        error => this.errorMsg = error );

      /* this.employees = this._employeeService.getEmployees(); */
    }

}
