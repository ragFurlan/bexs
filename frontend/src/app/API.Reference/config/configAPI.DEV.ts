// Usada para configurar os microserviços para simplificar a chamada das diferentes APIs

export  class ConfigAPIDev {  

     Get() : Config[]{

       let configs = [];

        var config = new Config();
        config.name = "question";
        config.host = "http://localhost:3333/question";
        config.json = "";
        config.mock = false;
        configs.push(config);

        var config = new Config();
        config.name = "answer";
        config.host = "http://localhost:3333/answer";
        config.json = "";
        config.mock = false;
        configs.push(config);     

        return configs;
       
    }   
}

export class Config {
    name: string;
    host: string;
    json: string;
    mock: boolean;
}





