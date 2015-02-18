var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config').lint;

var HintTask = function () {
  gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};
module.exports = HintTask;