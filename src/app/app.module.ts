import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentOne } from './ComponentOne/one.component';
import { ComponentTwo } from './ComponentTwo/two.component';
import { ComponentThree } from './ComponentThree/three.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ComponentOne, ComponentTwo, ComponentThree ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
