import { TestBed, inject } from '@angular/core/testing';
import { AnswerService } from './answer.service';
import { APIRestService } from '../API.Reference/APIRest.service';
import { ConfigService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { AppSettingDev } from '../API.Reference/appSettings/appSettings.DEV';
import { ConfigAPIDev } from '../API.Reference/config/configAPI.DEV';
import { HttpModule} from '@angular/http';

describe('Validar serviço de respostas', () => {

    function loadConfig(config: ConfigService) {
        return () => config.load(undefined);
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnswerService, APIRestService, HttpModule,
                ConfigService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: loadConfig,
                    deps: [ConfigService],
                    multi: true
                }],
            imports: [
                HttpClientModule
            ]
        });
    });

    it('Retornando lista de respostas', inject([AnswerService, APIRestService], (service: AnswerService, apiRest: APIRestService) => {
        expect(service.getList()).toBeTruthy();
    }));

    it('Inserindo informações', inject([AnswerService], (service: AnswerService) => {
        expect(service.post('Meu nome é Roberta', '5ebe785c1080fa34c836f0c6')).toBeInstanceOf;
    }));

});