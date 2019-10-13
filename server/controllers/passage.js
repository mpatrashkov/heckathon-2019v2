const Passage = require('../models/Passage');
const User = require('../models/User');

module.exports = {
    createPassage: async (req, res) => {
        let { lat, lon, comment, title, stanf, type, userId } = req.body;

        let passage = await Passage.create({
            lat,
            lon,
            comment,
            userId,
            title,
            stanf,
            type
        })

        res.status(200).json({
            message: "Passage created!",
            passage
        })
    },
    getAllPassages: async (req, res) => {
        try {
            let passages = await Passage.find();

            res.status(200).json({
                passages,
                message: "Passages fetch!"
            })
        } catch (error) {
            console.log(error)
        }
    }
}