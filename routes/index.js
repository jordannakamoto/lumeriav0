var express = require('express');
var router = express.Router();

/* mongoose */
var mongoose = require('mongoose');
mongoose.connect('mongodb://Vishnu:aloogobi@ds012578.mlab.com:12578/lumeria_creatures');

var db = mongoose.connection;

    
    var spiritSchema = mongoose.Schema;
    
    var Spirit = mongoose.model('Spirit', new spiritSchema({}),'gen1')
    
    Spirit.find({'name':'jordan'}, function (err, spirits){
        console.log(spirits);
    })

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



module.exports = router;
module.exports = socket;