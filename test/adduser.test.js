const { describe, before, it } = require('mocha');
 chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server');

chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;


//Test the /create route

    describe('/create user', () => {


        it('it should NOT create a user with wrong email', async () => {
            const toto = await chai.request(app)
            .post('/user')
            .send({

                "name": "natre",
                "userName": "tabc",
                "email": "tataingmail.com",
                "password": "user123",
                "cpassword": "user123"


              })

        expect(toto.status).to.equal(400)
        })

        it('it should NOT create a user with wrong fields', async () => {
            const toto = await chai.request(app)
            .post('/user')
            .send({

                "name": "paul",
                "UserName": "Raoul",
                "email": "paulgmail.com",
                "password": "user123",
                "cpassword": "user123"

              })

        expect(toto.status).to.equal(400)
        })
    })

