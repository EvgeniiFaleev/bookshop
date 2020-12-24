const mongoose = require("mongoose");
const express = require("express");
const app = require('express')();
const config = require("config");
const bodyParser = require('body-parser');
const PORT = config.get("port");
const URI = config.get("mongoURI");
var session = require('express-session');
const cookieParser = require('cookie-parser');

app.use("/",  cookieParser());
app.use("/",  session({
  secret: config.get("privateSessionKey"),
  cookie:{
    maxAge: 60000000
  }
}));
app.use("/auth",
  [bodyParser.urlencoded({extended: false}),
    require("./routes/user/auth")]);

app.use("/admin",
  [bodyParser.urlencoded({extended: false}),
    require("./routes/admin/auth")]);

app.use("/books",
  [bodyParser.urlencoded({extended: false}),
    require("./routes/books/paginate"),
    require("./routes/books/manage"),
    require("./routes/books/order")]);


async function start() {
  try {

    const db = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, function () {
      console.log(`ExpressJS is running on port ${PORT}!`);
    });
  } catch (e) {
    console.log("Server error ", e.message);
    process.exit(1)
  }
}

start();

