const AuthenticationRepository = require('../repositories')
  .AuthenticationRepository;
const Account = require('../../models').Account;

module.exports.findByEmail = async function(email) {
  return await Account.findOne({
    where: { email: email }
  });
};

module.exports.findById = async function(id) {
  return await Account.findOne({
    where: { id: id }
  });
};

module.exports.create = function(accountData, transaction) {
  let credentials = AuthenticationRepository.generateCredentials(
    accountData.password
  );
  return Account.create(
    {
      name: accountData.name,
      email: accountData.email,
      encryptedPassword: credentials.encryptedPassword,
      salt: credentials.salt,
      lastInteractionDate: Date.now()
    },
    { transaction: transaction }
  );
};
