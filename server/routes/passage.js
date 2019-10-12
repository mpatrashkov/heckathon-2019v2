const router = require('express').Router();
const passageController = require('../controllers/passage');
const isAuth = require('../middleware/is-auth');

router.post('/create', passageController.createPassage);

module.exports = router;
