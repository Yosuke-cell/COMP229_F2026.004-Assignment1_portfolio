const express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');

//import routers
let indexRouter = require('../app/routers/index');
let projectsRouter = require('../app/routers/projects');
let referenceRouter = require('../app/routers/referemce');


//config express
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routers
app.use('/', indexRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/references', referenceRouter);


//catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

//error handler
app.use(function (err, req, res, next) {
    //reader the error json
    res.status(err.status || 500);
    res.json({
        sucess: false,
        message: err.message
    });
});

module.exports = app;