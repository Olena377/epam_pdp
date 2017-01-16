/**
 * Created by Olena_Apoian on 1/13/2017.
 */

const request = require('supertest');
const fakeDB = require('../fake-db/index');
const dbAPI = require('../dbAPI');
const app = require('../app');

var mockDB =[ {
        firstName: 'Vanya',
        lastName: 'Petrov',
        company: 'EPAM',
        position: 'Architect',
        email: 'vasya@gmail.com',
        phoneNumber: '12345',
        id: '1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU'
    },
    {
        firstName: 'Mike',
        lastName: 'Jordan',
        company: 'EPAM',
        position: 'Junior',
        email: 'mike@gmail.com',
        phoneNumber: '321321',
        id: '2aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU'
    },
    {
        firstName: 'Julia',
        lastName: 'Petrova',
        company: 'EPAM',
        position: 'Middle',
        email: 'julia@gmail.com',
        phoneNumber: '222333',
        id: '3aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU'
    },
    { firstName: 'Jon',
        lastName: 'Snow',
        company: 'EPAM',
        position: 'Death watch',
        email: 'snow@gmail.com',
        phoneNumber: '111234',
        id: '4aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU'
    }];

fakeDB.setDb(mockDB);

describe('GET /api/users/', () => {
    it('should return 200 OK and return full collection', (done) => {
    request(app)
        .get('/api/users/')
        .expect(200, mockDB, done);
    });
});

describe('POST /api/users/', () => {
    it('should return 200 OK and a created user', (done) => {
        var newUser = {
            firstName: 'NewUserName',
            lastName: 'NewUserSurname',
            company: 'EPAM',
            position: 'CEO',
            email: 'newuser@gmail.com',
            phoneNumber: '127321'
        };

        request(app)
            .post('/api/users/')
            .send(newUser)
            .expect(function(res) {
                if(!('id' in res.body)){
                    throw new Error("user hasn't been created");
                }
                newUser.id = res.body.id;
            })
            .expect(newUser)
            .expect(200, done);
    });
});

describe('GET /api/users/isd_de', () => {
    it('should return 500 ERROR', (done) => {
        request(app)
            .get('/api/users/isd_de')
            .expect(500, done);
    });
});

describe('GET /api/users/1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU', () => {
    it('should return 200 OK and return full collection', (done) => {
        request(app)
            .get('/api/users/1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU')
            .expect(200, {
                firstName: 'Vanya',
                lastName: 'Petrov',
                company: 'EPAM',
                position: 'Architect',
                email: 'vasya@gmail.com',
                phoneNumber: '12345',
                id: '1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU'
                }, done);
    });
});

describe('PUT /api/users/1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU', () => {
    it('should return 200 OK and updated user', (done) => {
        request(app)
            .put('/api/users/1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU')
            .send({
                firstName: 'Vanya',
                lastName: 'Petrov',
                company: 'EPAM',
                position: 'Solution architect',
                email: 'best.vasya@gmail.com',
                phoneNumber: '12345678'})
            .expect(200, {
                firstName: 'Vanya',
                lastName: 'Petrov',
                company: 'EPAM',
                position: 'Solution architect',
                email: 'best.vasya@gmail.com',
                phoneNumber: '12345678',
                id: '1aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU'
            }, done);
    });
});

describe('DELETE /api/users/2aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU', () => {
    it('should return 200 OK', (done) => {
        request(app)
            .delete('/api/users/2aTmG76lTLW1LtRvfm9qOHEV3dsUNITUdbBU')
            .expect(200, done);
    });
});