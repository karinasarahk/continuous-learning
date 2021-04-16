// Import mysql connection
const connection = require("../models");

// get All data from transaksi
const getAll = (req, res) => {
  // Make a sql query
  let sql =
    "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok, t.createdAt, t.jumlah, t.total, t.updatedAt, t.changeCount AS TransaksiDiubah FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE deletedAt IS NULL;";

  // Run the sql query
  connection.query(sql, (err, results) => {
    // If error, it will go to here
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    //change date to our time zone
    const date = new Date();
    if (results) {
      results.forEach((item, i) => {
        item.updatedAt = new Date(results[0].updatedAt-date.getTimezoneOffset()*60000);
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
    "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok, t.createdAt, t.jumlah, t.total, t.updatedAt, t.changeCount AS TransaksiDiubah FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE t.id = ? AND deletedAt IS NULL";

  connection.query(sqlGetOne, [req.params.id], (err, results) => {
    // If error, it will go to here
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    //change date to our time zone
    const date = new Date();
    //change date to our timezone
    if (results[0]) {
      results[0].updatedAt = new Date(results[0].updatedAt-date.getTimezoneOffset()*60000);
    }
    // If no error, it will go here
    return res.status(200).json({
      message: "Success",
      data: results[0],
    });
  });
};

// Create data
const create = (req, res) => {
  // Find price of barang
  let sqlFindBarang = "SELECT * FROM barang WHERE id = ?";

  // Run sqlFindBarang
  connection.query(sqlFindBarang, [req.body.id_barang], (err, results) => {
    let price = eval(results[0].harga);
    let total = eval(req.body.jumlah * price);

    //get date for now then convert to mysql format
    const date = new Date();
    let convertedDate = new Date(date.valueOf()-(date.getTimezoneOffset()*60000));
    const mysqlDate = convertedDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    // Make sql query
    let sqlCreate =
      "INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total, createdAt) VALUES (?, ?, ?, ?, ?)";
    // Run Query Create
    connection.query(
      sqlCreate,
      [
        req.body.id_barang,
        req.body.id_pelanggan,
        req.body.jumlah,
        total,
        mysqlDate,
      ],
      (err, results) => {
        // If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err,
          });
        }

        // If Success
        let sqlSelect = `SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok, t.createdAt, t.jumlah, t.total, t.updatedAt, t.changeCount AS TransaksiDiubah FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE t.id = ${results.insertId}`;

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
  });
};

// Update
const update = (req, res) => {
  // Find barang
  let sqlFindBarang = "SELECT * FROM barang WHERE id = ?";

  // Run find query
  connection.query(sqlFindBarang, [req.body.id_barang], (err, results) => {
    let price = eval(results[0].harga);
    let total = eval(req.body.jumlah * price);

    let sqlGetCount = `SELECT changeCount FROM transaksi WHERE id = ${req.params.id}`;
    connection.query(sqlGetCount, [req.body.id_barang], (err, results) => {
      //get change count / berapa kali diubah/update
      let count = eval(results[0].changeCount) + 1;

      //get date for now then convert to mysql format
      const date = new Date();
      let convertedDate = new Date(date.valueOf()-(date.getTimezoneOffset()*60000));
      const mysqlDate = convertedDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
        console.log(mysqlDate);

      let sqlUpdate =
        "UPDATE transaksi SET id_barang = ?, id_pelanggan = ?, jumlah = ?, total = ? , updatedAt = ?, changeCount = ? WHERE deletedAt IS NULL AND transaksi.id = ?";

      connection.query(
        sqlUpdate,
        [
          req.body.id_barang,
          req.body.id_pelanggan,
          req.body.jumlah,
          total,
          mysqlDate,
          count,
          req.params.id,
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
            "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok, t.createdAt, t.jumlah, t.total, t.updatedAt, t.changeCount AS TransaksiDiubah FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE deletedAt IS NULL AND t.id = ?";

          connection.query(sqlGetOne, [req.params.id], (err, results) => {
            // If error, it will go to here
            if (err) {
              return res.status(500).json({
                message: "Internal Server Error",
                error: err,
              });
            }

            //change date to our time zone
            if (results[0]) {
              results[0].updatedAt = new Date(results[0].updatedAt-date.getTimezoneOffset()*60000);
            }
            // If no error, it will go here
            return res.status(200).json({
              message: "Success",
              data: results[0],
            });
          }); //end query getOne updated
        }
      ); // end query update
    });
  });
};

// Delete data
const deleteData = (req, res) => {
  let sqlDelete = "UPDATE transaksi SET deletedAt = ? WHERE id = ?";
  //get date for now then convert to mysql format
  const date = new Date();
  let convertedDate = new Date(date.valueOf()-(date.getTimezoneOffset()*60000));
  const mysqlDate = convertedDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  connection.query(sqlDelete, [mysqlDate, req.params.id], (err, results) => {
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
