const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

module.exports.getUser = async (req, res) => {
  try {
    const _data = await userModel.find({});
    return res.send({ code: 200, message: 'success', data: _data });
  } catch (error) {
    console.log(error);
    return res.send({ code: 500, message: 'service error' });
  }
};

module.exports.addUser = async (req, res) => {
  const { email, password, name, branch, cgpa } = req.body;

  try {
    const userExists = await userModel.findOne({ email: email });

    if (userExists) {
      return res.send({ code: 400, message: 'User already exists' });
    }

    const _res = await userModel.create({
      email: email,
      password: password,
      name: name,
      branch: branch,
      cgpa: cgpa,
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


module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email: email });
    if (userExists) {
      if (userExists.password !== password) {
        return res.send({ code: 400, message: 'Invalid email or password' });
      }
      const _token = await jwt.sign({ ...userExists }, 'mySecretKey');
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

module.exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie('jwt'); // clear the JWT cookie
    return res.send({ code: 200, message: 'Logout success' });
  } catch (error) {
    console.log(error);
    return res.send({ code: 500, message: 'Service error' });
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser) {
      return res.send({ code: 200, message: 'User deleted successfully.' });
    } else {
      return res.send({ code: 400, message: 'User not found.' });
    }
  } catch (error) {
    console.log(error);
    return res.send({ code: 500, message: 'Service error' });
  }
};





