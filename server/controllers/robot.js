const Robot = require('../models/Robot');
const Passage = require('../models/Passage');

module.exports = {
    createRobot: async (req,res) => {
        let {lon, lat} = req.body;

        let robot = await Robot.create({
            lat,
            lon
        })

        res.status(200).json({
            robot,
            message: "Robot created!"
        })
    },

    updateLocation: async (req,res) => {
        try {
            let {lon, lat, haveFound} = req.body;

            let robot = await Robot.find();

            robot[0].lon = lon;
            robot[0].lat = lat;
            robot[0].haveFound = haveFound;

            await robot[0].save();

            if(haveFound == 1) {
                let passage = await Passage.create({
                    lon,
                    lat,
                    robotId: robot[0]._id
                })

                res.status(200).json({
                    passage,
                    message: "Robot have found passage!"
                })
            }
            else {
                let passage = await Passage.find({lon: lon, lat: lat})

                if(passage) {
                    await Passage.deleteOne({lon: lon, lat: lat});
                }

                res.status(200).json({
                    message: "Robot haven't found passage yet!"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}