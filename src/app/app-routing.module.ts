import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/18-routing/department-list/department-list.component';
import { DepartmentDetailComponent } from './components/18-routing/department-detail/department-detail.component';
import { EmployeeListComponent } from './components/18-routing/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/18-routing/page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './components/18-routing/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/18-routing/department-contact/department-contact.component';


const routes: Routes = [
    { path: '', redirectTo: '/departments', pathMatch: 'full' }, /* only if it is full empty, otherwise we use 'prefix'*/
    { path: 'departments', component: DepartmentListComponent },
    { 
        path: 'departments/:id', 
        component: DepartmentDetailComponent,
        children: [
            { path: 'overview', component: DepartmentOverviewComponent },
            { path: 'contect', component: DepartmentContactComponent },
        ]

    },
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
        PageNotFoundComponent,
        DepartmentOverviewComponent,
        DepartmentContactComponent
    ]