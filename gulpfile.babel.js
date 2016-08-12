var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var hbsfy = require("hbsfy");
var BackboneHandlebars = require('./public/js/3p/backbone.handlebars.js')


gulp.task('default', plugins.sequence('hbs', 'bsfy'));

gulp.task('bsfy', function () {
  var stream = gulp.src('./bsfy/**/*.js')
    .pipe(plugins.browser.browserify())
    .pipe(gulp.dest("./public/js/"));
  return stream;
});

gulp.task('hbs', function () {
    var hbs = require("handlebars");
    var BackboneHandlebars = require('./public/js/3p/backbone.handlebars.js')
  gulp.src('hbs/**/*.hbs')
    .pipe(plugins.handlebars({
      handlebars: hbs
    }))
    .pipe(plugins.wrap('require(\'handlebars\').template(<%= contents %>)'))
    .pipe(plugins.declare({
      namespace: "tmpl",
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(plugins.concat('js/templates.js'))
    .pipe(gulp.dest('public'));
});

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

gulp.task('watch', function () {
  plugins.watch(['bsfy/**/*.js', 'hbs/**/*.hbs'], 'default');
})