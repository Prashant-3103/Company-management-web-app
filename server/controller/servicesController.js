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
  const { title, description } = req.body;

  // Check if title and description fields are present in the request body
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required." });
  }

  try {
    // Create a new service using the servicesModel
    const newService = new servicesModel({
      title: title,
      description: description,
    });

    // Save the new service to the database
    await newService.save();

    return res.status(201).json({
      message: "Service added successfully.",
      data: { title: title, description: description },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
