let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('QuestionController', () => {
    it('Testando GET ', (done) => {
        chai.request('http://localhost:3333')
            .get('/question')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('Testando POST ', (done) => {
        let body = {
            newQuestion: "Qual o seu melhor amigo?",
            user: "ana02"
        }
        setTimeout(function () {
            chai.request('http://localhost:3333')
                .get('/question')
                .send(body) // vamos enviar esse arquivo
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        }, 10000);

    });
});
