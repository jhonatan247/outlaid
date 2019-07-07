let CryptographyAssistant = require('../assistants').CryptographyAssistant;
let AccountRepository = require('./account');

module.exports.checkToken = async function(token) {
  if (token) {
    let decoded = CryptographyAssistant.getTokenInformation(token);
    let account = await AccountRepository.findById(decoded.id);
    if (
      account &&
      account.token == token &&
      CryptographyAssistant.isAllowedInteraction(account.lastInteractionDate)
    ) {
      await account.update({ lastInteractionDate: Date.now() });
      return {
        id: account.id,
        name: account.name,
        email: account.email,
        status: account.status
      };
    } else {
      throw Error('Token unauthorized');
    }
  } else {
    throw Error('Auth token was not supplied');
  }
};

module.exports.createToken = async function(accountData) {
  const email = accountData.email;
  const password = accountData.password;
  if (email && password) {
    const account = await AccountRepository.findByEmail(email);

    const hash = CryptographyAssistant.encryptWithSHA2(password + account.salt);

    if (hash === account.encryptedPassword) {
      const accountData = {
        id: account.id,
        type: account.type,
        name: account.name,
        email: account.email,
        status: account.status
      };
      accountData.token = CryptographyAssistant.generateToken(accountData);
      await account.update({
        token: accountData.token,
        lastInteractionDate: Date.now()
      });
      return {
        user_data: accountData
      };
    } else {
      throw Error('Wrong password or email');
    }
  } else {
    throw Error('There is no user or email');
  }
};

module.exports.deleteToken = async function(accountData) {
  let user = await AccountRepository.findByEmail(accountData.email);
  await user.update({ token: null, connected: false });
};
