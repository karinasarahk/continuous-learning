const express = require("express");
const app = express();
const routerOne = require("./routes/routerOne");

app.use("/", routerOne);
app.listen(2001, () => console.log("Server running on the 2001 port."));
