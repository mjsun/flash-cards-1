var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var FlashCardModel = require('./models/flash-card-model');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.use(function (req, res, next) {
	console.log('made it')
	next();
});

app.get('/cards', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.post('/card', function(req, res){

    //var newCard = new FlashCardModel(req.body);
    //newCard.save().then(function(doc){
    //    res.json(doc);
    //}, function(err){
    //    res.json(err);
    //});
    FlashCardModel.create(req.body).then(function(doc){
        res.json(doc);
    }, function(err){
        console.log(err);
    });
});

app.put('/card', function(req, res){
    console.log(req.body);
   FlashCardModel.findOne(req.body._id, function(err, doc){
       for(var key in req.body){
           doc[key] = req.body[key];
       }
       doc.save().then(function(data){
           res.json(data);
       });
   });
});

app.delete('/card/:id', function(req, res){
    FlashCardModel.remove({_id: req.params.id}).then(function(doc){
        res.json(doc);
    });
});


