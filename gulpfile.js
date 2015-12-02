var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var data = require('gulp-data');
var yaml = require('yamljs');

gulp.task('jade', function(){
    gulp.src('src/*.jade')
        .pipe(plumber())
        .pipe(data(
            yaml.load('./data.yml')
        ))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', function(){
  gulp.watch('src/**/*.jade', ['jade']);
});
