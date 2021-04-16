const express = require("express"); // import express
const router = express.Router(); // make a router

// Import controller
const barangController = require("../controllers/barangController");

// Define routes
router.get("/", barangController.getAll);
router.get("/:id", barangController.getOne);
router.post("/", barangController.create);
router.put("/:id", barangController.update);
router.delete("/:id", barangController.deleteData);

// export router
module.exports = router;
