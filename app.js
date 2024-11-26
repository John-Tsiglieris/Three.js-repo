var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files
//app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public', 'CSS2D_examples')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Difference between app.get and app.use???
app.get('/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/CSS2D_examples/css2d_label.html'));
  //res.sendFile(path.join(__dirname, 'public', '/CSS2D_examples/CSS2D_example1.html'));
  //res.sendFile(path.join(__dirname, 'public', '/demo.html'));
});
app.get('/2', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public', '/CSS2D_examples/CSS2D_example1.html'));
  res.sendFile(path.join(__dirname, 'public', '/demo.html'));
});
app.get('/3', (req, res) => {
  //res.sendFile(path.join(__dirname, 'public', '/CSS2D_examples/CSS2D_example1.html'));
  res.sendFile(path.join(__dirname, 'public', '/webgl_effects_ascii.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/*
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

// Temporary simple error handler

app.use((err, req, res, next) => {
  console.error("Error encountered:", err.message); // Log the error message to identify it
  res.status(500).send("Something went wrong. Please check your configuration. This is a modified error message, remember to return to the original!"); // Send a simple text response
});



module.exports = app;
