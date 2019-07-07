const TransactionController = require('../controllers').TransactionController;
var router = require('express').Router();

router.post('/', TransactionController.register);
router.get('/', TransactionController.getByOwner);

module.exports = router;
