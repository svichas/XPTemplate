const gulp   = require('gulp');
const pump   = require('pump');
const rename = require("gulp-rename");
const sass   = require("gulp-sass");

gulp.task('compress-sass', function (cb) {
  pump([
        gulp.src('cssbin/scss/*.scss'),
        sass({outputStyle: "compressed"}).on("error", sass.logError),
        rename("core.min.css"),
        gulp.dest('cssbin'),
    ],
    cb
  );
});


gulp.task('compile', function (cb) {
  gulp.watch("./cssbin/scss/*", ["compress-sass"]);
});
