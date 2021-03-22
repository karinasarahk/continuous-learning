class ControllerOne {
  get(req, res) {
    console.log("Acquiring name...");
    if (req.params.name === "Karina") {
      res.send("Full name: Karina Sarah Kusumadewi.");
    } else {
      res.send("Username not found.");
    }
  }
  
  post(req, res) {
    console.log("Updating data...");
    if (req.params.name === "Karina") {
      res.send("Full name: Karina Sarah Kusumadewi.");
    } else {
      res.send("Error updating. Username not found.");
    }
  }
  
  put(req, res) {
    console.log("Putting update...");
    if (req.params.name === "Karina") {
      res.send("Full name: Karina Sarah Kusumadewi");
    } else {
      res.send("Error. Username not found.");
    }
  }
  
  delete(req, res) {
    console.log("Deleting...");
    if (req.params.name === "Karina") {
      res.send("Full name: Karina Sarah Kusumadewi");
    } else {
      res.send("Error deleting. Username not found.")
    }
  }
}

module.exports = new ControllerOne;
  