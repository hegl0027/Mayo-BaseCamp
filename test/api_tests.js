'use strict';

var server = require('supertest').agent("http://localhost:8000");
var should = require('should');

describe("api test", function () {

    it("returns json data", function (done) {
        server
            .get("/dist/api/sample.json")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                res.body.name.should.equal('Brady');
                if (err) throw err;
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
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});