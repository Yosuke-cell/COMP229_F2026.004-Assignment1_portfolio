var express = require('express');
var router = express.Router();

var servicesContoroller = require('../controllers/services');

router.post('/', servicesContoroller.processAdd);

router.get('/', servicesContoroller.processList);
router.get('/:id', servicesContoroller.getByID);

router.put('/:id', servicesContoroller.processEdit);

router.delete('/:id', servicesContoroller.processDelete);
module.exports = router;