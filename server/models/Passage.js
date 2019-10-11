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
    robotId: {
        type: Schema.Types.ObjectId,
        ref: 'Robot'
    },
    dateOfCreation: {
        type: Schema.Types.String,
        default: Date.now()
    }
});

const Passage = mongoose.model('Passage', passageSchema)

module.exports = Passage;