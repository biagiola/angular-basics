import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/18-routing/department-list/department-list.component';
import { EmployeeListComponent } from './components/18-routing/employee-list/employee-list.component';


const routes: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent]