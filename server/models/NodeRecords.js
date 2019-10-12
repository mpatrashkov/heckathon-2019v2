const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeRecordSchema = new Schema({
    nodeId: {
        type: Schema.Types.ObjectId,
        ref: 'Node',
        required: true
    },
    fish: {
        type: Schema.Types.Boolean,
        default: false,
        required: true
    },
    temp: {
        type: Schema.Types.Number
    },
    time: {
        type: Schema.Types.String,
        required: true
    },
    outdated: {
        type: Schema.Types.Boolean,
        required: true,
        default: false
    }
})

const NodeRecord = mongoose.model('NodeRecord', nodeRecordSchema)

module.exports = NodeRecord;