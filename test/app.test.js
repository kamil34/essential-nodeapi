import chai from 'chai';
import chaiHttp from 'chai-http';
import { server as app } from '../app.js';
// const app = require('../app');

chai.should();
chai.use(chaiHttp);

      describe("GET '/'", () => {

            it("SHOULD GET and get a VALID response", (done) => {

                  chai.request(app).get("/").send().end((error, response) => {
                              response.should.have.status(200);
                              // response.body.should.be.a('string');
                              // response.body.should.be.a('array');
                              done();
                              });

                  });

            });