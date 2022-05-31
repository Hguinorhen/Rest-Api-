const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT
const URI= process.env.URI
console.log(PORT,URI)
  mongoose.connect(
    "mongodb+srv://nour:nournour@cluster0.ujmhk.mongodb.net/mongoosefirst?retryWrites=true&w=majority ",
    () => console.log("Database is connected")
  );

app.use(express.json());

app.use("/contact", require("./routes/contacts")); 



const contact = require("./models/contact");
