
const pocModel = require('../models/pocModel');
const jwt = require('jsonwebtoken');

module.exports.getPoc = async (req, res) => {
  try {
    const _data = await pocModel.find({});
    return res.send({ code: 200, message: 'success', data: _data });
  } catch (error) {
    console.log(error);
    return res.send({ code: 500, message: 'service error' });
  }
};


module.exports.addPoc = async (req, res) => {
    const {password, name, email} = req.body;

    try {
      const userExists = await pocModel.findOne({ email: email });

      if (userExists) {
        return res.send({ code: 400, message: 'User already exists' });
      }

      const _res = await pocModel.create({
        email: email,
        password: password,
        name: name
      });

      if (_res) {
        return res.send({ code: 200, message: 'success added' });
      } else {
        return res.send({ code: 500, message: 'service error' });
      }
    } catch (error) {
      console.log(error);
      return res.send({ code: 500, message: 'service error' });
    }
  };


module.exports.loginPoc = async (req, res) => {
  const { email, password } = req.body;
  try {
    const pocExists = await pocModel.findOne({ email: email });
    if (pocExists) {
      if (pocExists.password !== password) {
        return res.send({ code: 400, message: 'Invalid email or password' });
      }
      const _token = await jwt.sign({ ...pocExists }, 'mySecretKey');
      return res.send({
        code: 200,
        message: 'Login success',
        token: _token,
      });
    } else {
      return res.send({ code: 400, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.log(error);
    return res.send({ code: 500, message: 'Service error' });
  }
};
