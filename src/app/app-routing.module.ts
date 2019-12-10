import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/18-routing/department-list/department-list.component';
import { EmployeeListComponent } from './components/18-routing/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/18-routing/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/18-routing/department-detail/department-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/departments', pathMatch: 'full' }, /* only if it is full empty, otherwise we use 'prefix'*/
    { path: 'departments', component: DepartmentListComponent },
    { path: 'departments/:id', component: DepartmentDetailComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
        DepartmentListComponent, 
        EmployeeListComponent, 
        DepartmentDetailComponent,
        PageNotFoundComponent
    ]