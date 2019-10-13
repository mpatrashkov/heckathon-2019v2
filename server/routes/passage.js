const router = require('express').Router();
const passageController = require('../controllers/passage');
const isAuth = require('../middleware/is-auth');

router.post('/create', isAuth, passageController.createPassage);
router.get('/get/all', passageController.getAllPassages);

module.exports = router;
