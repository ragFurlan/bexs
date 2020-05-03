import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { ListAnswerComponent } from './components/list-answer/list-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListQuestionComponent,
    ListAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
