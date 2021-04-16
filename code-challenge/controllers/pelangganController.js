const connection = require("../models");

const getAll = (req, res) => {
  let sql = "SELECT * FROM pelanggan";
  connection.query(sql, (err, results) => {
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
  let sqlGetOne = "SELECT * FROM pelanggan WHERE id = ? ";
  connection.query(sqlGetOne, [req.params.id], (err, results) => {
    // If error, it will go to here
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    return res.status(200).json({
      message: "Success",
      data: results[0],
    });
  });
};

const create = (req, res) => {
    let sqlCreate = "INSERT INTO pelanggan(nama) VALUES (?) ";
    connection.query(sqlCreate, [req.body.nama], (err, results) => {
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      // If success
      return res.status(201).json({
        message: "Success",
        data: results,
      });
    });
  }

const update = (req, res) => {
  let sqlUpdate = "UPDATE pelanggan SET nama = ? WHERE id = ?";

  connection.query(
    sqlUpdate, [req.body.nama, req.params.id],(err, results) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }

      // If success
      let sqlGetOne = "SELECT * FROM pelanggan WHERE id = ? ";
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
  let sqlDelete = "DELETE FROM pelanggan WHERE id = ?";

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

module.exports = { getAll, create, update, deleteData, getOne }; // Export getAll function
