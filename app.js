const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser')
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const csurf = require('csurf');
const routes = require('./routes');
const { ValidationError } = require("sequelize");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser())


// Security Middleware
app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
// app.use(csurf({
//   cookie: {
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: process.env.NODE_ENV === 'production',
//     httpOnly: true
//   }
// }));


app.use(routes);

// Serve React Application
// This should come after routes, but before 404 and error handling.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
  }
  err.status = 422;
  next(err);
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.clearCookie('token');
  }
  res.json({
    message: err.message,
    stack: err.stack,
    errors: err.errors,
  });
});

module.exports = app;

// app.use(function(err, _req, res, _next) {
//   res.status(err.status || 500);
//   if (err.status === 401) {
//     res.set('WWW-Authenticate', 'Bearer');
//   }
//   res.json({
//     message: err.message,
//     error: JSON.parse(JSON.stringify(err)),
//   });
// });

// module.exports = app;
