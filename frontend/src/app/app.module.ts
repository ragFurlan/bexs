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
import { APIRestService } from './../app/API.Reference/APIRest.service';
import { ConfigService } from './services/config.service';
import { HttpModule, XHRBackend, Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule  } from 'ng2-search-filter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AnsweredFilterDirective } from './directives/answered-filter.directive';

export function loadConfig(config: ConfigService) {
  return () => config.load(undefined);
}

@NgModule({
  declarations: [
    AppComponent,
    ListQuestionComponent,
    ListAnswerComponent,
    AnsweredFilterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatCheckboxModule
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
  bootstrap: [AppComponent],
  exports: [
    MatIconModule,
    Ng2SearchPipeModule,
    MatCheckboxModule
  ]
})
export class AppModule { }
