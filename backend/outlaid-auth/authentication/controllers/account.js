const AccountRepository = require('../repositories').AccountRepository;

module.exports.register = (req, res) => {
  if (req.body.email && req.body.password) {
    AccountRepository.create(req.body)
      .then(() => {
        res.json({
          success: true,
          message: 'user succesful created'
        });
      })
      .catch(error => res.status(500).json({ message: error.message }));
  } else {
    console.log(req);
    res.status(400).json({
      success: false,
      message: 'wrong Parameters'
    });
  }
};

module.exports.getById = (req, res) => {
  if (req.decoded.id) {
    AccountRepository.findById(req.decoded.id)
      .then(accountData => {
        if (req.decoded.id == accountData.id) {
          let account = {
            id: accountData.id,
            email: accountData.email,
            token: accountData.token
          };
          res.json({
            success: true,
            account: account
          });
        } else {
          throw 'Action not allowed';
        }
      })
      .catch(error => res.status(500).json({ message: error.message }));
  } else {
    console.log(req);
    res.status(400).json({
      success: false,
      message: 'wrong Parameters'
    });
  }
};
