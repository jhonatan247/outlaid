let AuthenticationRepository = require('../repositories')
  .AuthenticationRepository;

module.exports.authorize = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  AuthenticationRepository.checkToken(token)
    .then(decoded => {
      req.decoded = decoded;
      next();
    })
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.authenticateWithToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  AuthenticationRepository.checkToken(token)
    .then(user_data => {
      res.json({
        success: true,
        message: 'Authentication successful',
        user_data: user_data
      });
    })
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.authenticate = (req, res) => {
  AuthenticationRepository.createToken(req.body)
    .then(passport =>
      res.json({
        success: true,
        message: 'Authentication successful',
        token: passport.token,
        user_data: passport.user_data
      })
    )
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.disavow = (req, res) => {
  AuthenticationRepository.deleteToken(req.decoded)
    .then(() =>
      res.json({
        success: true,
        message: 'Token already disavowed'
      })
    )
    .catch(error => res.status(500).json({ message: error.message }));
};
