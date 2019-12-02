import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// example of adding a component
import { BoxOneComponent } from './components/box-one/box-one.component';
import { BoxTwoComponent } from './components/box-two/box-two.component';
import { BoxThreeComponent } from './components/box-three/box-three.component';

import { Interpolation } from './components/05-interpolation/interpolation.component';
import { BindingProperty } from './components/06-property-binding/property-binding.component';
import { ClassBinding } from './components/07-class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    
    BoxOneComponent,
    BoxTwoComponent,
    BoxThreeComponent,

    Interpolation,
    BindingProperty,
    ClassBinding,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
