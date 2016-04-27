'use strict';

var server = require('supertest').agent("http://localhost:8000");
var should = require('chai').should();

describe("api test", function () {

    it("returns json data", function (done) {
        server
            .get("/app/api/sample.json")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                res.body.name.should.equal('Brady');
                done();
            });
    });


    it("attepts to redirect", function (done) {
        server
            .get("/dist")
            .expect(302)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });


    it("returns html", function (done) {
        server
            .get("/dist/index.html")
            .expect("Content-type", /html/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});