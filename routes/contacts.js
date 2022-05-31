const express = require("express");
const contactRouter = express.Router();
const contact = require("../models/contact");

//methode post

contactRouter.post("/add", async (req, res) => {
  try {
    let newContact = new contact({ ...req.body });
    let result = await newContact.save();
    res.send({ result, msg: "sucefuly aded" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

//methode delete

contactRouter.delete("/:id", async (req, res) => {
  try {
    let result = await contact.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete " });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

//methode get

contactRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    let result = await contact.findOne({ _id: req.params.id });
    res.send({ result, msg: " ONE contact" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// //methode get

contactRouter.get("/getall", async (req, res) => {
  try {
    let result = await contact.find();
    res.send({ result, msg: " All contact" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// //methode put

contactRouter.put("/:id", async (req, res) => {
  try {
    let result = await contact.findOneAndUpdate({
      _id: req.params.id,
      $set: { ...req.body },
    });
    res.send({ result, msg: " ONE users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = contactRouter;
