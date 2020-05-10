import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { ListAnswerComponent } from './components/list-answer/list-answer.component';
import { QuestionAnswerService } from '../app/services/questios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListQuestionComponent,
    ListAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuestionAnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
