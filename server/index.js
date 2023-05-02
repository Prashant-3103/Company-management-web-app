require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const pocController = require('./controller/pocController')
const servicesController = require('./controller/servicesController')
const adminController = require('./controller/adminController')
const userController = require('./controller/userController');

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




const DB = 'mongodb+srv://pappi3103:Gopal@cluster0.wr5aml0.mongodb.net/IRIS?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.error("Error connecting to database: ", err);

});



app.get('/hello',(req, res)=>{
    return res.send(`hello`)
})
//when we click /api/services it will redirect us to servicesController.addServices
app.post('/api/services', servicesController.addServices)
app.get('/api/services', servicesController.getServices)
app.get('/api/slider', servicesController.getSlider)
app.get('/admin/admins', adminController.getAdmins)
app.post('/admin/add', adminController.addAdmins)
app.post('/admin/login', adminController.loginAdmin)
app.post('/user/add', userController.addUser);
app.post('/user/login', userController.loginUser);
app.get('/user/get', userController.getUser);
app.delete('/user/delete/:id', userController.deleteUser)
app.get('/poc/get', pocController.getPoc);
app.post('/poc/add', pocController.addPoc);
app.post('/poc/login', pocController.loginPoc);



app.listen(5000, ()=>
{
    console.log("backend running at port 5000")
})


