/**
 * Created by Olena_Apoian on 1/13/2017.
 */
const request = require('supertest');
const app = require('../app');
const fakeDB = require('../fake-db/index');

describe('GET /', () => {
    it('should return 200 OK', (done) => {
    request(app)
        .get('/')
        .expect(200, done);
    });
});

describe('GET /:id', () => {
    it('should return 200 OK', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /random-url', () => {
    it('should return 404', (done) => {
        request(app)
            .get('/reset')
            .expect(404, done);
    });
});
