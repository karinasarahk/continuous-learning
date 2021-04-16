// Import mysql connection
const connection = require("../models");

// get All data from barang
const getAll = (req, res) => {
  // Make an sql query
  let sql =
    "SELECT b.id as id_barang, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id ORDER BY id_barang";

  // Run the sql query
  connection.query(sql, (err, results) => {
    // If error, it will go here
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If no error, it will go here
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

const getOne = (req, res) => {
  let sqlGetOne =
    "SELECT b.id, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id WHERE b.id = ?";

  connection.query(sqlGetOne, [req.params.id], (err, results) => {
    // If error, it will go here
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If no error, it will go here
    return res.status(200).json({
      message: "Success",
      data: results[0], // needs to be edited?
    });
  });
};

// Create data
const create = (req, res) => {

    // Make sql query
    let sqlCreate =
      "INSERT INTO barang(nama, harga, id_pemasok) VALUES (?, ?, ?)";

    // Run Query Create
    connection.query(
      sqlCreate,
      [req.body.nama, req.body.harga, req.body.id_pemasok],
      (err, results) => {
        // If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }
          console.log(results);

        // If Success
        let sqlSelect = `SELECT b.id, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id WHERE b.id = ${results.insertId}`;

        // Run Select Query
        connection.query(sqlSelect, (err, results) => {
          // If error
          if (err) {
            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }

          // If success
          return res.status(201).json({
            message: "Success",
            data: results[0],
          });
        });
      }
    );
};

// Update
const update = (req, res) => {

    let sqlUpdate =
      "UPDATE barang SET nama = ?, harga = ?, id_pemasok = ? WHERE id = ?";

    connection.query(
      sqlUpdate,
      [
        req.body.nama,
        req.body.harga,
        req.body.id_pemasok,
        req.params.id
      ],
      (err, results) => {
        // If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }

        // If success
        let sqlGetOne =
          "SELECT b.id, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id WHERE b.id = ?";

        connection.query(sqlGetOne, [req.params.id], (err, results) => {
          // If error, it will go to here
          if (err) {
            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }

          // If no error, it will go here
          return res.status(200).json({
            message: "Success",
            data: results[0],
          });
        });
      }
    );
};

// Delete data
const deleteData = (req, res) => {
  let sqlDelete = "DELETE FROM barang WHERE id = ?";

  connection.query(sqlDelete, [req.params.id], (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If success
    return res.status(200).json({
      message: "Success",
    });
  });
};

module.exports = { getAll, getOne, create, update, deleteData }; // Export getAll function
