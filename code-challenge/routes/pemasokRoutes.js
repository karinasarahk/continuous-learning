const express = require("express");
const router = express.Router();

const pemasokController = require("../controllers/pemasokController")

router.get("/", pemasokController.getAllData);
router.post("/", pemasokController.createData);
router.put("/:id", pemasokController.updateData);
router.delete("/:id", pemasokController.deleteData);
router.get("/:id", pemasokController.getOneData);

module.exports = router;
