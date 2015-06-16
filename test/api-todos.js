var app = require('..');
var request = require('supertest');
var assert = require('assert');

describe('Todos API', function () {
    describe('GET /', function () {
        it('should response 200 OK', function (done) {
            request(app)
                .get('/api/todos')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('POST /', function () {
        var todo = {};

        // after(function (done) {
        //     request(app)
        //         .del('/api/todos/' + todo._id)
        //         .expect(200)
        //         .end(done);
        // });

        it('should response 201 OK', function (done) {
            request(app)
                .post('/api/todos', { text: 'New issue'})
                .set('Accept', 'application/json')
                .expect(201)
                .end(function (err, res) {
                    if (err) return done(err);
                    todo = res.body;
                    done();
                });
        });

        it('should return the same entity by id', function (done) {
            request(app)
                .get('/api/todos/' + todo._id)
                .set('Accept', 'application/json')
                .expect(todo, done);
        });
    });

    describe('DELETE /', function () {
        var todo = {};

        it('create item', function (done) {
            request(app)
                .post('/api/todos', { text: 'New issue'})
                .set('Accept', 'application/json')
                .expect(201)
                .end(function (err, res) {
                    if (err) return done(err);
                    todo = res.body;
                    done();
                });
        });

        it('delete it, should return 200 OK', function (done) {
            request(app)
                .del('/api/todos/' + todo._id, function () {
                    done();
                })
                .expect(200);
        });
    });
});
