const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    lat: {
        type: Schema.Types.String,
        required: true
    },
    lon: {
        type: Schema.Types.String,
        required: true
    },
    batteryLevel: {
        type: Schema.Types.Number,
        default: 0
    },
    isDead: {
        type: Schema.Types.Boolean,
        default: false,
        required: true
    },
    dateOfCreation: {
        type: Schema.Types.String,
        default: Date.now()
    }
});

const Node = mongoose.model('Node', nodeSchema)

module.exports = Node;