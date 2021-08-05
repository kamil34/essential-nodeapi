const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.should();
chai.use(chaiHttp);

describe("Testing API routes", () => {

      describe("POST /api/getUser", () => {

            it("SHOULD POST and get a VALID body response", (done) => {

                  chai.request(app).post("/api/getUser").type('json').send({
                        'request': 'Unit test'
                        }).end((error, response) => {
                              response.should.have.status(200);
                              response.body.should.be.a('object');
                              // response.body.should.be.a('array');
                              done();
                              });

                  });

            });

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

      });