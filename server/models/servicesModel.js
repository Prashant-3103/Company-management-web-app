const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  role: {type: String, required: true},
  package: {type: String, required: true},
  poc:{type: String, required: true},
  active: {type: String, required: true},
  branch: {type: String, required: true},
  cgpa: {type: String, required: true }




});

module.exports = mongoose.model('Services', servicesSchema);
