import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <div>Departments component works</div>
    <ul class="items">
        <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
            <span class="badge">{{ department.id }}</span> {{ department.name }}
        </li>
    </ul>
  `,
  styles: [``]
})
export class DepartmentListComponent implements OnInit {

    public selectedId;

    departments = [
        { "id": 1, "name": "Angular"},
        { "id": 2, "name": "Node"},
        { "id": 3, "name": "MongoDB"},
        { "id": 4, "name": "Ruby"},
        { "id": 5, "name": "Bootstrap"}
    ]

    constructor( private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe( (params: ParamMap) => {
            let id = parseInt(params.get('id'));
            this.selectedId = id;
        });        
    }

    onSelect( department ) {
        // absolute path
        //this.router.navigate(['/departments', department.id]);

        // relative path

        this.router.navigate([department.id], {relativeTo: this.route});
        /* no matter what is the route, to the current append the departmentId then navigate to the corrent url*/
    }

    isSelected( department ) {
        return department.id === this.selectedId
    }

}
