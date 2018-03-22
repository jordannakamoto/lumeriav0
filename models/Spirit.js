var mongoose = require('mongoose');

var spiritSchema = mongoose.Schema;
    
var Spirit = mongoose.model('Spirit', new spiritSchema({}),'gen1');

module.exports = Spirit;