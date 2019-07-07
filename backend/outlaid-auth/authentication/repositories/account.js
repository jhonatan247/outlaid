let CryptographyAssistant = require('../assistants').CryptographyAssistant;
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
  let salt = CryptographyAssistant.generateRandomString(100);
  let encryptedPassword = CryptographyAssistant.encryptWithSHA2(
    accountData.password + salt
  );
  return Account.create(
    {
      name: accountData.name,
      email: accountData.email,
      encryptedPassword: encryptedPassword,
      salt: salt,
      lastInteractionDate: Date.now()
    },
    { transaction: transaction }
  );
};
