import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/Operators';
import 'rxjs/Rx';
import { AppSettingDev } from '../API.Reference/config/appSettings.DEV';
import { ConfigAPIDev } from '../API.Reference/config/configAPI.DEV';

class Config {
    appSettings: AppSettings;
    configAPI: any[];
    adalConfig: AdalConfig;
    appInsights: AppInsights;
}

class AppSettings {
    env: string;
    timeReload: number;
    urlBase: string;
    mock: boolean;
}

class AdalConfig {
    tenant: string;
    clientId: string;
    tenantURI: string;
    redirectUri: string;
    postLogoutRedirectUri: string;
}

class AppInsights {
    instrumentationKey: string;
}

export const config = new Config();

@Injectable()
export class ConfigService {

    constructor(private injector: Injector) { }

    private get http(): Http {
        return this.injector.get(Http);
    }

    public async load(done): Promise<any> {
        if (environment.env === "DEV") {            
            var app = new AppSettingDev();
            var configAppSettings = new AppSettings();
            configAppSettings.env = app.environment;
            configAppSettings.timeReload = app.timeReload;
            configAppSettings.urlBase = app.urlBase;
            configAppSettings.mock = app.mock;
            config.appSettings = configAppSettings;
            config.configAPI = new ConfigAPIDev().Get();

        }

    }
}
