const router = require('express').Router();
const nodeController = require('../controllers/node');
const isAuth = require('../middleware/is-auth');

router.post('/create/record', nodeController.createRecord);
router.get('/get/all', nodeController.getRecords)
router.post('/create', nodeController.createNode)

module.exports = router;
