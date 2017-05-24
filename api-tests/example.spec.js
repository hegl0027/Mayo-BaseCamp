import * as supertest from 'supertest';
import {expect} from 'chai';

const server = supertest.agent("http://localhost:8080");

describe("api test", () => {

  it("returns html", () => {
    return server
      .get("/")
      .expect("Content-type", /html/)
      .expect(200)
      .then(res => {
        // do something fun with the response
        expect(res.status).to.equal(200);
      });
  });

  it("returns html", () => {
    server
      .get("/index.html")
      .expect("Content-type", /html/)
      .expect(200);
  });
});
