import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AutocompleteLibModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
