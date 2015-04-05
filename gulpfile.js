'use strict';

require("babel/register");


var gulp = require('gulp');
var fs = require("fs");
var babel = require("gulp-babel");


gulp.task('js', function(){
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['js']);
