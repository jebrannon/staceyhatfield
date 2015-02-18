var gulp = require('gulp');


/*
		Import task modules
*/
var config = require('./gulp/config');
var Images = require('./gulp/tasks/ImagesTask');
var Fonts = require('./gulp/tasks/FontsTask');
var Markup = require('./gulp/tasks/MarkupTask');
var Less = require('./gulp/tasks/LessTask');
var Libs = require('./gulp/tasks/LibsTask');
var Hint = require('./gulp/tasks/HintTask');
var Angular = require('./gulp/tasks/AngularTask');
var Server = require('./gulp/tasks/ServerTask');


/*
		Define individual tasks
*/
gulp.task('images', Images);
gulp.task('fonts', Fonts);
gulp.task('markup', Markup);
gulp.task('less', Less);
gulp.task('libs', Libs);
gulp.task('hint', Hint);
gulp.task('angular', Angular);
gulp.task('run-dev-server', Server.develop);
gulp.task('run-release-server', Server.release);
gulp.task('reload', Server.reload);


/*
		Group tasks
*/
gulp.task('compile', ['markup', 'less', 'libs', 'hint', 'angular']);
gulp.task('default', ['images', 'fonts', 'compile', 'run-dev-server'], function () {
  gulp.watch(config.markup.watch, ['markup', 'reload']);
  gulp.watch(config.less.watch, ['less', 'reload']);
  gulp.watch(config.libs.watch, ['libs', 'reload']);
  gulp.watch(config.angular.watch, ['angular', 'hint', 'reload']);
});
gulp.task('check-release', ['run-release-server']);