const AuthenticationController = require('../controllers')
  .AuthenticationController;
const AccountController = require('../controllers').AccountController;
var router = require('express').Router();

router.post('', AccountController.register);
router.get('', AuthenticationController.authorize, AccountController.register);

module.exports = router;
