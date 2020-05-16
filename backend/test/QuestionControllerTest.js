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

    it('Testando PUT ', (done) => {
        let body = {
            likes: "3",
            user: "ana02"
        }
        setTimeout(function () {
            chai.request('http://localhost:3333')
                .put('/question?id=5ebe79a71080fa34c836f0c9')
                .send(body) // vamos enviar esse arquivo
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        }, 10000);

    });
});
