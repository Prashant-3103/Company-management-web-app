const mongoose = require('mongoose');

const adminsModel = mongoose.model('admin', {
 type: String,
  userName: String,
  password: String,
  status: String,
  date: String,
});

module.exports = adminsModel;

adminsModel.create({
    type: "ADMIN",
  userName: 'admin-default',
  password: 'Taylor',
  status: 'active',
  date: new Date().toISOString(),
})
.then(function(result) {
  console.log(result);
})
.catch(function(err) {
  console.log(err);
});
 