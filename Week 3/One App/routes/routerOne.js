const express = require("express"); // Import express
const router = express.Router(); // Make router

// Import controller
const ControllerOne = require("../controllers/controllerOne");

router.get("/:name", ControllerOne.get);
router.post("/:name", ControllerOne.post);
router.put("/:name", ControllerOne.put);
router.delete("/:name", ControllerOne.delete);

// Export router so index.js can access the router
module.exports = router;
