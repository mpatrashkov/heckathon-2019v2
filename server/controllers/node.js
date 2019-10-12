const Passage = require('../models/Passage');
const User = require('../models/User');
const Node = require('../models/Node')
const NodeRecord = require('../models/NodeRecords')

module.exports = {
    createRecord: async (req, res) => {
        let { nodeId, fish, temp } = req.body;

        let oldRecord = await NodeRecord.findOne({nodeId: nodeId, outdated: false})
        if(oldRecord){
            oldRecord.outdated = true;
            await oldRecord.save();
        }
        

        let nodeRecord = await NodeRecord.create({
            nodeId,
            fish,
            temp,
            time: Date.now()
        })

        res.status(200).json({
            nodeRecord,
            message: "Record send!"
        })
    },
    getRecords: async (req, res) => {
        let nodeInfos = [];
        let nodeRecords = await NodeRecord.find({outdated: false})

        for await (nodeRecord of nodeRecords) {
            let node = await Node.findById(nodeRecord.nodeId);
            nodeInfos.push({
                ...nodeRecord._doc,
                lat: node.lat,
                lon: node.lon
            })
        }

        res.status(200).json({
            nodeInfos,
            message: "Got info from nodes!"
        })
    },
    createNode: async (req, res) => {
        let { lat, lon } = req.body;

        let node = await Node.create({
            lat,
            lon
        })

        res.status(200).json({
            node,
            message: "Node created!"
        })
    }
}