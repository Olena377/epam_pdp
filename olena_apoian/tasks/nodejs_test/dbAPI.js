var express = require('express'),
    router = express.Router(),
    fakeDb = require('./fake-db/index'),
    idRegexp = /^[A-Za-z0-9]{36}$/;

router.route('/')
    .get(function (req, res) {
        fakeDb.getCollection(function (err, users){
            if(err){
                res.status(500).send(err.message);
            }
            res.json(users);
        });
})
    .post(function (req, res) {
        fakeDb.create(req.body, function  (err, user){
            if(err){
                res.status(500).send(err.message);
            }
            res.json(user);
        });
    });

router.use('/:id', function(req, res, next) {
    if(!idRegexp.test(req.params.id))
        res.status(500).send('Id\'s length must be 36 with latin symbols or numbers');
    else next();
});

router.route('/:id')
    .get(function (req, res) {
        fakeDb.getById(req.params.id, function (err, user) {
            if(err){
                res.status(500).send(err.message);
            }
            res.json(user);
        });
    })
    .put(function (req, res) {
        req.body.id = req.params.id;
        fakeDb.update(req.body, function (err, user) {
            if(err){
                res.status(500).send(err.message);
            }
            res.send(user);
        });
    })
    .delete(function (req, res) {
        fakeDb.remove(req.params.id, function (err)  {
            if(err){
                res.status(500).send(err.message);
            }
            res.send();
        });
    });

module.exports = router;