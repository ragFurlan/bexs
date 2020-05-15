import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAnswerComponent } from './list-answer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';

describe('ListAnswerComponent', () => {
  let component: ListAnswerComponent;
  let fixture: ComponentFixture<ListAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAnswerComponent],
      imports: [
        CommonModule,
        FormsModule,
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnswerComponent);
    component = fixture.componentInstance;

    component.listAnswer = [
      {
        "_id": "5ebe79921080fa34c836f0c8",
        "text": "Roberta Furlan",
        "user": "beto01",
        "creationDate": "2020-05-15T11:14:26.199Z",
        "question": "5ebbe9e0b63af951386b5c8a",
        "__v": 0
      }];

    fixture.detectChanges();
  });

  it('Componente deve ser carregado', () => {
    expect(component).toBeTruthy();
  });
});
