import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { SuccessAlertComponent } from './components/homework-one/successAlert/successAlert.component';
import { WarningAlertComponent } from './components/homework-one/warningAlert/warningAlert.component';
import { HomeworkOneComponent } from './components/homework-one/homework-one.component';

import { HomeworkTwoComponent } from './components/homework-two/homework-two.component';

import { HomeworkThreeComponent } from './components/homework-three/homework-three.component';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    HomeworkOneComponent,
    HomeworkTwoComponent,
    HomeworkThreeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
