import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <div>Departments component works</div>
    <ul>
        <li (click)="onSelect(department)" *ngFor="let department of departments">
            <span>{{ department.id }}</span> {{ department.name }}
        </li>
    </ul>
  `,
  styles: [``]
})
export class DepartmentListComponent implements OnInit {

    departments = [
        { "id": 1, "name": "Angular"},
        { "id": 2, "name": "Node"},
        { "id": 3, "name": "MongoDB"},
        { "id": 4, "name": "Ruby"},
        { "id": 5, "name": "Bootstrap"}
    ]

    constructor( private router: Router) {}

    ngOnInit() {

    }

    onSelect(department) {
        this.router.navigate(['/departments',department.id]);
    }

}
