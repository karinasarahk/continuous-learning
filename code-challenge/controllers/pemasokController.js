const connection = require("../models");

//Read One Data
const getOneData = (req, res) => {
  let sqlGetOne = "SELECT * FROM pemasok WHERE id = ?";

  connection.query(sqlGetOne, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

//Read All Data
const getAllData = (req, res) => {
  let sqlGetAll = "SELECT * FROM pemasok";

  connection.query(sqlGetAll, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

//Create Data
const createData = (req, res) => {
  let sqlCreate = "INSERT INTO pemasok (nama, no_telp) VALUES (?, ?)";
  connection.query(sqlCreate, [req.body.nama, req.body.no_telp], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    let sqlSelect = `SELECT * FROM pemasok WHERE id = ${result.insertId}`;
    connection.query(sqlSelect, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      return res.status(200).json({
        message: "Success",
        data: result[0],
      });
    });
  });
};

//Delete Data
const deleteData = (req, res) => {
  let sqlDelete = `DELETE FROM pemasok WHERE id = ?`;
  connection.query(sqlDelete, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    return res.status(200).json({
      message: "Success",
    });
  });
};

//Update Data
const updateData = (req, res) => {
  let sqlUpdate = `UPDATE pemasok SET nama = ?, no_telp = ? WHERE id = ?`;
  connection.query(sqlUpdate, [req.body.nama, req.body.no_telp, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    let sqlSelect = `SELECT * FROM pemasok WHERE id = ?`;
    connection.query(sqlSelect, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
      return res.status(200).json({
        message: "Success",
        data: result,
      });
    });
  });
};

module.exports = { getAllData, createData, updateData, deleteData, getOneData };
