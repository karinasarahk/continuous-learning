const express = require("express"); //import express
const router = express.Router(); //make a router

//import controller
const pelangganController = require("../controllers/pelangganController");

//defines routes
// If user go to http://localhost:3000/transaksi (GET)
router.get("/", pelangganController.getAll);
router.post("/", pelangganController.create);
router.get("/:id", pelangganController.getOne);
router.put("/:id", pelangganController.update);
router.delete("/:id", pelangganController.deleteData);

module.exports = router; //export router
