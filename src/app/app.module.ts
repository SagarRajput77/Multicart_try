import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomPipe1Pipe } from './Pipe/custom-pipe1.pipe';
import { ReactiveFormComponent } from './Reactive/reactive-form/reactive-form.component';
import { RAFNEWComponent } from './raf-new/raf-new.component';
import { CompComponent } from './new-com/comp/comp.component';
import { HttpClientModule } from '@angular/common/http';
import { Demo1Component } from './demo1/demo1.component'

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    
    CustomPipe1Pipe,
         ReactiveFormComponent,
         RAFNEWComponent,
         CompComponent,
         Demo1Component,
         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
