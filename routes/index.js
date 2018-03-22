var express = require('express');
var router = express.Router();
var Spirit = require('../models/Spirit')

/* mongoose */
var mongoose = require('mongoose');
mongoose.connect('mongodb://Vishnu:aloogobi@ds012578.mlab.com:12578/lumeria_creatures');

var db = mongoose.connection;


/* socket */
var socket = function(io) {

    io.on('connection', function(socket){
        console.log('a user connected')
        /*socket.on('send message', function(data){
            io.sockets.emit('new message', data);
        })*/
    });
    return router;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'lumeria' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send(summons);
});


function search(name){
   var query = Spirit.find({ "name" : name}).lean();
   return query;
}
var summons = [];
var player_summons = ["jordan","carlos","chani"];
var team2_summons = ["hog"];
for(var i = 0; i < player_summons.length; i++){
    search(player_summons[i]).then(function (doc){
    var test = doc[0];
    test.team = 'player';
    summons.push(test);
    })
}
for(var i = 0; i < team2_summons.length; i++){
    search(team2_summons[i]).then(function (doc){
    doc[0].team = 'team2';
    summons.push(doc[0]);
    })
}

module.exports = router;
module.exports = socket;