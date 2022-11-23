const Shop = require("../models/shopping");

const shopping_all = (req, res) => {
  Shop.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Shopping", datas: result });
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const shopping_create = (req, res) => {
  res.render("create", { title: "Create" });
};

const shopping_post = (req, res) => {
  const shop = new Shop(req.body);
  shop
    .save()
    .then((result) => res.redirect("/shopping"))
    .catch((err) => {
      console.log(err);
    });
};

const shopping_details = (req, res) => {
  const id = req.params.id;
  Shop.findById(id).then((result) => {
    console.log(result);
    res.render("details", { details: result, title: "Details" });
  });
};

const shopping_delete = (req, res) => {
  const id = req.params.id;
  Shop.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/shopping" });
    })

    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  shopping_all,
  shopping_create,
  shopping_post,
  shopping_details,
  shopping_delete,
};
