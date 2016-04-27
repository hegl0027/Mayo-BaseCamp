'use strict';
var supertest = require('supertest');
var server = supertest.agent("http://localhost:8000");
var should = require('should');

describe("api test", function () {

    it("should return some json data", function (done) {
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
});