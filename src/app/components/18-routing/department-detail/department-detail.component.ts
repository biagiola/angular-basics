import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `    
    <h3>You selected department with id = {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <div>
        <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})

export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;

  constructor( private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    /* 
        snapshot has a problem with router specially when you wnat to
        go back in a previous same component. 
        Angular is going to figure out if he will initialize a new component or
        if can re use it; when we navigate back to the same component angular
        simply reuse the component, no initialization implies but ngOnit() 
        method does not get call in enhance the new id will never be retrieved
        from the url.
    */
   /*
        the paramMap API provide us the get method to retrieve the id parameter   
   */
    this.route.paramMap.subscribe( (params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }

}
