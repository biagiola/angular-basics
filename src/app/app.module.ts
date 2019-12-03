import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
