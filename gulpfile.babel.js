var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();


gulp.task('bsfy', function () {
  var stream = gulp.src('./bsfy/**/*.js')
    .pipe(plugins.browser.browserify())
    .pipe(gulp.dest("./public/js/"));
  return stream;
});

gulp.task('hbs', function(){
  gulp.src('hsb/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['bsfy']);
gulp.task('prettify', function () {
  var stream = gulp.src(['./bsfy/**/*.js', './gulpfile.babel.js'])
//    .pipe(plugins.debug({title: 'unicorns'}))
    .pipe(plugins.jsPrettify({
      break_chained_methods: true,
      indent_size: 2,
      end_with_newline: true,
      jslint_happy: true,
    }))
    .pipe(gulp.dest('./'));
});