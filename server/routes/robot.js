const router = require('express').Router();
const robotController = require('../controllers/robot');

router.post('/create', robotController.createRobot);
router.post('/update', robotController.updateLocation);

module.exports = router;
