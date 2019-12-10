import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

// example of adding a component
import { BoxOneComponent } from './components/box-one/box-one.component';
import { BoxTwoComponent } from './components/box-two/box-two.component';
import { BoxThreeComponent } from './components/box-three/box-three.component';

import { Interpolation } from './components/05-interpolation/interpolation.component';
import { BindingProperty } from './components/06-property-binding/property-binding.component';
import { ClassBinding } from './components/07-class-binding/class-binding.component';
import { StyleBinding } from './components/08-style-bindings/style-bindings.component';
import { EventBinding } from './components/09-event-bindings/event-bindings.component';
import { TemplateReferenceVariables } from './components/10-template-reference-variables/template-reference-variables.component';
import { TwoWayBinding } from './components/11-two-way-binding/two-way-binding.component';
import { ngIfDirective } from './components/12-ng-if-directive/ng-if-directive';
import { ngSwitchDirective } from './components/13-ng-switch-directive/ng-switch-directive.component';
import { ngForDirective } from './components/14-ng-for-directive/ng-for-directive.component';
import { ComponentInteraction } from './components/15-component-interaction/component-interaction.component';
import { ChildComponent } from './components/15-component-interaction/child/child.component';
import { Pipes } from './components/16-pipes/pipes.component';

import { EmployeeService } from './components/17-services/employee.service';
import { EmployeeList } from './components/17-services/employee-list/employee-list.component';
import { EmployeeDetails } from './components/17-services/employee-details/employee-details.component';

import { DepartmentListComponent } from './components/18-routing/department-list/department-list.component';
import { EmployeeListComponent } from './components/18-routing/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/18-routing/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/18-routing/department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    
    BoxOneComponent,
    BoxTwoComponent,
    BoxThreeComponent,

    Interpolation,

    BindingProperty,
    ClassBinding,
    StyleBinding,
    EventBinding,
    
    TemplateReferenceVariables,
    TwoWayBinding,
    
    ngIfDirective,
    ngSwitchDirective,
    ngForDirective,
    
    ComponentInteraction,
    ChildComponent,
    Pipes,

    EmployeeList,
    EmployeeDetails,
    DepartmentListComponent,
    EmployeeListComponent,

    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
