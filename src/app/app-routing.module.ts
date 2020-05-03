import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListQuestionComponent } from './components/list-question/list-question.component'
import { ListAnswerComponent } from './components/list-answer/list-answer.component'

export const routes: Routes = [

  { path: '', component: ListQuestionComponent },
  { path: 'resposta/:id', component: ListAnswerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
