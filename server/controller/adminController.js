const adminModel = require('../models/adminsModel')
const jwt = require('jsonwebtoken')

module.exports.getAdmins = async (req, res) => {
const _data = await adminModel.find({})
if(_data){
    return res.send({code: 200, message: 'success', data: _data})

}
else{
    return res.send({code: 500, message: 'service error'})
}
};

module.exports.addAdmins = async (req, res) => {
    const  { userName, password, type, status,date} = req.body
    const _res = await adminModel.create({userName, password, type, status,date })
    if(_res){
        return res.send({code: 200, message: 'success added'})

    }
    else{
        return res.send({code: 500, message: 'service error'})
    }
    };
    module.exports.loginAdmin = async (req,res)=>{
        const { userName, password } = req.body
        const userExists = await adminModel.findOne({ userName: userName })
        if (userExists) {
            if (userExists.password !== password) {
                return res.send({ code: 400, message: 'Username or Password wrong.', })
            }
            const _token = await jwt.sign({ ...userExists }, 'PRIV_123')

            return res.send({
                code: 200,
                message: 'login success',
                token: _token,
                type: userExists.type
            })
        } else {
            return res.send({ code: 500, message: 'Service error' })
        }
    }
    module.exports.deleteAdmin= async (req, res) => {
        const { id } = req.params;
        try {
          const deletedAdmin = await adminModel.findByIdAndDelete(id);
          if (deletedAdmin) {
            return res.send({ code: 200, message: 'admin deleted successfully.' });
          } else {
            return res.send({ code: 400, message: 'admin not found.' });
          }
        } catch (error) {
          console.log(error);
          return res.send({ code: 500, message: 'Service error' });
        }
      };
