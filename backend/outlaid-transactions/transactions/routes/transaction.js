const TransactionController = require('../controllers').TransactionController;
var router = require('express').Router();

router.post('/', TransactionController.register);
router.post('/predictions', TransactionController.getByOwner);

module.exports = router;
