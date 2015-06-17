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

        it('create item', function (done) {
            createItem({ text: 'New issue' }, function (err, data) {
                if (err) return done(err);
                todo = data;
                done();
            });
        });

        it('should return the same entity by id', function (done) {
            request(app)
                .get('/api/todos/' + todo._id)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(todo, done);
        });
    });

    describe('PUT /', function () {
        var todo = {};
        it('create item', function (done) {
            createItem({ text: 'New issue' }, function (err, data) {
                if (err) return done(err);
                todo = data;
                done();
            });
        });

        it('update it, should return 200 OK', function (done) {
            var newText = 'Updated issue';
            request(app)
                .put('/api/todos/' + todo._id)
                .send({ text: newText })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, function (err, res) {
                    if (err) return done(err);
                    assert.equal(newText, res.body.text);
                    done();
                });
        });
    });

    describe('DELETE /', function () {
        var todo = {};
        it('create item', function (done) {
            createItem({ text: 'New issue' }, function (err, data) {
                if (err) return done(err);
                todo = data;
                done();
            });
        });

        it('delete it, should return 200 OK', function (done) {
            request(app)
                .del('/api/todos/' + todo._id)
                .expect(200, done);
        });
    });

    function createItem(obj, fn) {
        request(app)
            .post('/api/todos')
            .send(obj)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function (err, res) {
                fn(err, res.body);
            });
    }
});
