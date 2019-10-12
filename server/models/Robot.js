const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const robotSchema = new Schema({
    lat: {
        type: Schema.Types.String,
        required: true
    },
    lon: {
        type: Schema.Types.String,
        required: true
    },
    haveFound: {
        type: Schema.Types.Number,
        required: true,
        default: 0
    }
});

const Robot = mongoose.model('Robot', robotSchema)

module.exports = Robot;