const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.shopping_all);
router.get("/create", controller.shopping_create);
router.post("/", controller.shopping_post);
router.get("/details/:id", controller.shopping_details);
router.delete("/:id", controller.shopping_delete);
/* router.get("/");
router.post("/");
router.get("/:id");
router.delete("/:id"); */
module.exports = router;
