import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListQuestionComponent } from './list-question.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';

describe('ListQuestionComponent', () => {
  let component: ListQuestionComponent;
  let fixture: ComponentFixture<ListQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListQuestionComponent],
      imports: [
        CommonModule,
        FormsModule,
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuestionComponent);
    component = fixture.componentInstance;
    component.listQuestion = [
      {
        "id": "5ebbe6f4b63af951386b5c89",
        "text": "Quem é você?",
        "user": "ana01",
        "creationDate": "2020-05-13T12:24:20.229Z",
        "quantityAnswer": 1
      },
      {
        "id": "5ebc0c21b63af951386b5c8b",
        "text": "O nome do seu gato?",
        "user": "ana01",
        "creationDate": "2020-05-13T15:02:57.434Z",
        "quantityAnswer": 1
      }];
    fixture.detectChanges();
  });

  it('Componente deve ser carregado', () => {
    expect(component).toBeTruthy();
  });
});
