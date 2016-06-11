import { should } from 'chai';
import supertest from 'supertest';

const server = supertest.agent("http://localhost:3000");

describe("api test", () => {

    it("returns json data", done => {
        server
            .get("/sample/sample.json")
            .expect("Content-type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                res.body.name.should.equal('Brady');
                done();
            });
    });


    it("returns html", done => {
        server
            .get("/")
            .expect("Content-type", /html/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });

    it("returns html", done => {
        server
            .get("/index.html")
            .expect("Content-type", /html/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});