import { TestBed, inject } from '@angular/core/testing';
import { QuestionService } from './question.service';
import { APIRestService } from '../API.Reference/APIRest.service';
import { HttpClientModule } from '@angular/common/http';

describe('Validar serviço de questões', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService,APIRestService, ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('Retornando lista de questoes', inject([QuestionService, APIRestService], (service: QuestionService, apiRest: APIRestService) => {
    expect(service.getList()).toBeTruthy();
  }));

  it('Inserindo informações', inject([QuestionService], (service: QuestionService) => {
    expect(service.post('Qual o seu nome?')).toBeInstanceOf;
  }));

  it('putLikes', inject([QuestionService], (service: QuestionService) => {
    expect(service.putLikes(3, '5ebe785c1080fa34c836f0c6')).toBeInstanceOf;
}));

});