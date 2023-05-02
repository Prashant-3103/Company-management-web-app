const mongoose = require('mongoose');

const pocSchema = mongoose.Schema({

    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

const Model = mongoose.model('poc', pocSchema);

module.exports = Model;
