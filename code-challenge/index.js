const express = require("express"); // Import Express
const app = express(); // Create app from express

// const transaksiRoutes = require("./routes/transaksiRoutes.js"); // Import transaksiRoutes
const barangRoutes = require("./routes/barangRoute.js");
// const pelangganRoutes = require("./routes/pelangganRoutes.js");
// const pemasokRoutes = require("./routes/pemasokRoutes.js");

app.use(express.urlencoded({ extended: false }));

// app.use("/transaksi", transaksiRoutes); // If accessing localhost:3000/transaksi/*, it will use transaksiRoutes
app.use("/barang", barangRoutes);
// app.use("/pelanggan", pelangganRoutes);
// app.use("/pemasok", pemasokRoutes);

app.listen(3001); // make application have port 3000
