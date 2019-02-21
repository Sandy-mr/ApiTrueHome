var mongoose = require('mongoose');
// Setup schema
var propertySchema = mongoose.Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    price: {
        type: Number
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export property model
var Property = module.exports = mongoose.model('property', propertySchema);
module.exports.get = function (callback, limit) {
    Property.find(callback).limit(limit);
}