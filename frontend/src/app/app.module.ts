import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { ListAnswerComponent } from './components/list-answer/list-answer.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIRestService } from './../app/API.Reference/APIRest.service';
import { ConfigService } from './services/config.service';
import { HttpModule, XHRBackend, Http, RequestOptions } from '@angular/http';

export function loadConfig(config: ConfigService) {
  return () => config.load(undefined);
}

@NgModule({
  declarations: [
    AppComponent,
    ListQuestionComponent,
    ListAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService],
      multi: true
    },
    QuestionService,
    AnswerService,
    APIRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
