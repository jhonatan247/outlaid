const TransactionRepository = require('../repositories').TransactionRepository;
const axios = require('axios');

module.exports.register = (req, res) => {
  if (req.body) {
    let data = JSON.parse(req.body);
    asyncRegister(data)
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

let asyncRegister = async (dataArray = []) => {
  for (let i = 0; i < dataArray.length; i++) {
    await TransactionRepository.create(dataArray[i]);
  }
};

module.exports.getByOwner = (req, res) => {
  asyncRequest()
    .then(data => {
      console.log(data);
      res.json({
        success: true,
        data: data.data
      });
    })
    .catch(error => res.status(500).json({ message: error.message }));
};

let asyncRequest = async () => {
  let info = await TransactionRepository.findByOwner(null);
  return await axios.post('http://10.203.150.241:5000/', info);
};
