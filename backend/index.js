const mongoose = require("mongoose");
const path = require('path');
const express = require("express");
const app = require('express')();
const config = require("config");
const bodyParser = require('body-parser');
const PORT = config.get("port");
const URI = config.get("mongoURI");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = {
  origin: 'https://bookshoppet.herokuapp.com',
  credentials: true
};
console.log('proces!s', process.env.PORT)
app.use("/", cookieParser(), cors(corsOptions));
app.use("/", session({
  secret: config.get("privateSessionKey"),
  cookie: {
    path: '/',
    maxAge: 60000000,
    httpOnly: false
  }
}));
app.use("/auth",
  [express.json(),
    require("./routes/user/auth")]);

app.use("/user",
  [express.json(),
    require("./routes/user/userBooks")]);


app.use("/admin",
  [express.json(),
    require("./routes/admin/auth")]);

app.use("/books",
  [express.json(),
    require("./routes/books/paginate"),
    require("./routes/books/manage"), require("./routes/books/order"),
    require("./routes/books/chart"), require("./routes/books/book"),
    require("./routes/books/book"),
    require("./routes/books/category"),
  ]);

app.use(express.static('public'));
app.use('/', express.static('../frontend/build'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

async function start() {
  try {

    const db = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(process.env.PORT || PORT, function () {
      console.log(`ExpressJS is running on port ${PORT}!`);
    });
  } catch (e) {
    console.log("Server error ", e.message);
    process.exit(1)
  }
}

start();

