const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passageSchema = new Schema({
    lat: {
        type: Schema.Types.String,
        required: true
    },
    lon: {
        type: Schema.Types.String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: Schema.Types.String,
        required: true,
        default: "Found by our Robot!"
    },
    type: {
        type: Schema.Types.String
    },
    stanf: {
        type: Schema.Types.String
    },
    title: {
        type: Schema.Types.String,
        required: true
    },
    dateOfCreation: {
        type: Schema.Types.String,
        default: Date.now()
    }
});

const Passage = mongoose.model('Passage', passageSchema)

module.exports = Passage;