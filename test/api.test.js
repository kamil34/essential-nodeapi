import chai from 'chai';
import chaiHttp from 'chai-http';
import { server as app } from '../app.js';
// const app = require('../app');

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

      describe("POST /api/addUser", () => {

            it("SHOULD POST and get a VALID body response", (done) => {

                  chai.request(app).post("/api/addUser").type('json').send({
                        'request': 'Unit test'
                        }).end((error, response) => {
                              response.should.have.status(200);
                              response.body.should.be.a('object');
                              // response.body.should.be.a('array');
                              done();
                              });

                  });

            });

      describe("POST /api/removeUser", () => {

            it("SHOULD POST and get a VALID body response", (done) => {

                  chai.request(app).post("/api/removeUser").type('json').send({
                        'request': 'Unit test'
                        }).end((error, response) => {
                              response.should.have.status(200);
                              response.body.should.be.a('object');
                              // response.body.should.be.a('array');
                              done();
                              });

                  });

            });

      });