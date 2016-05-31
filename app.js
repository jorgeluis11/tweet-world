var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var config = require('./config');
var app = express();
// var util = require('util'),
//     twitter = require('twitter');
//
// var twit = new twitter({
//   consumer_key: 'MBkIpIKnDEIthw6KiSpx56Hwr',
//   consumer_secret: 'nuARAL6P29LF502iqgyKKx96kCIYHbzuBAu71l5z16GInB3yA0',
//   access_token_key: '252000999-CqVj4LOvkCZJvhP3VBFhwrOOtSt4ypvWevDwJcpo',
//   access_token_secret: '9ZpQJi80zR0LjPdHsN85ZoXVsNbkpayCZ41AMMjdaYuyA'
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// mongoose.connect("mongodb://127.0.0.1/mongo")
// var User = mongoose.model("users", {name:String});

// app.get("/getUsers",function(req, res){
//   // var user = new User({name:"test"});
//   // user.save();
//   // mongoose.model("users").find(function(err, users){
//   //   res.json(users);
//   // });
//   // twit.get('https://api.twitter.com/1.1/geo/search.json',{query:'query'}, function(data) {
//   //     res.send(`Result: ${JSON.stringify(data)}`);
//   // });
//
// });


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);
// app.use('/tweet', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
