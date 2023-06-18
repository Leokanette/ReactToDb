const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newrailway",
});

app.get("/trainlist", (req, res) => {
  const sql = "SELECT * FROM trainlist";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

app.get("/passenger", (req, res) => {
  const sql = "SELECT * FROM passenger";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

app.post('/submit', (req, res) => {
  const {name, age, sex, address, book_date, time, origin, destination, category } = req.body;

  const sql = `CALL BookTrainTicket(${name}, ${age}, ${sex}, ${address}, ${book_date}, ${time}, ${origin}, ${destination}, ${category});`;

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ data, message: 'Successfully created' });
    }
  });
});
app.listen(8888, () => {
  console.log("listening");
});
