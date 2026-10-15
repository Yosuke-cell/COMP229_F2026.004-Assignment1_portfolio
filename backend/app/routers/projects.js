var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projects');

router.get('/', projectsController.projectsList);
router.post('/', projectsController.processAdd);

module.exports = router;