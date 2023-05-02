const servicesModel = require("../models/servicesModel");

module.exports.getServices = async (req, res) => {
  try {
    const services = await servicesModel.find({});
    return res.status(200).json({ message: "success", data: services });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "service error" });
  }
};

module.exports.addServices = async (req, res) => {
  const { title, description, role,package,poc, active,branch,cgpa} = req.body;

  // Check if title and description fields are present in the request body
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required." });
  }

  try {
    // Create a new service using the servicesModel
    const newService = new servicesModel({
      title: title,
      description: description,
      role: role,
      package:package,
      poc: poc,
      active: active,
      branch: branch,
      cgpa: cgpa

    });

    // Save the new service to the database
    await newService.save();

    return res.status(201).json({
      message: "Service added successfully.",
      data: { title: title, description:description,role: role, package:package, poc:poc, active: active,branch:branch,cgpa:cgpa},
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};


module.exports.getSlider = (req,res)=>{
  const url1 =''
  const url2 = ''
  const url3 = ''
  const url4 = ''
  const arr = [url1,url2,url3,url4]
  return res.send({code: 200, message: 'success', data: arr} )
}


//delete the service
module.exports.deleteServices = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedServices = await servicesModel.findByIdAndDelete(id);
    if (deletedServices) {
      return res.send({ code: 200, message: 'User deleted successfully.' });
    } else {
      return res.send({ code: 400, message: 'User not found.' });
    }
  } catch (error) {
    console.log(error);
    return res.send({ code: 500, message: 'Service error' });
  }
};
  