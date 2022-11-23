const express = require("express");
const app = express();

//Modules
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");

//Custom Modules
const shopRouter = require("./routers/shopRouter");

//Mongoose Connection
const dbURI =
  "mongodb+srv://semih:552003@cluster0.caqcmmk.mongodb.net/Shopping?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//Middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(morgan("dev"));

//Sets
app.set("view engine", "ejs");

//Routings
app.get("/", (req, res) => {
  res.redirect("/shopping");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/shopping", shopRouter);

//Main Shopping Routings

app.listen(3000);
