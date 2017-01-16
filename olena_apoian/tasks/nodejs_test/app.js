var express = require('express'),
    bodyParser = require('body-parser'),
    dbAPI = require('./dbAPI'),
    app = express();

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('index', {title: 'Express task'});
});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/api/users', dbAPI);

app.use(function (req, res) {
    res.status(404).send('<h1>Error 404 file not found</h1>');
});

app.listen(3000,  function () {
    console.log('Sever is listening on port 3000');
});

module.exports = app;