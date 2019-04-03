const { task, watch, series, src, dest } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const scss = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const uglifycss = require("gulp-uglifycss");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const image = require("gulp-image");

const sync = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
};

scss.compiler = require("node-sass");
const scssTask = () => {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(scss().on("error", scss.logError))
    .pipe(sourcemaps.write())
    .pipe(concat("styles.css"))
    .pipe(
      uglifycss({
        maxLineLen: 0,
        uglyComments: true
      })
    )
    .pipe(dest("./dist/css/"))
    .pipe(browserSync.reload({ stream: true }));
};

const minifyHTML = () => {
  return src(["./src/**/*.html"])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
};

const js = () => {
  return src("./src/js/**/*.js")
    .pipe(concat("app.js"))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(browserSync.reload({ stream: true }));
};

// gulp-image requires external dependencies libjpeg libpng
const compressImages = () => {
  return src("./src/img/*")
    .pipe(image())
    .pipe(dest("./dist/img/"));
};

task("default", series(scssTask, minifyHTML, js, compressImages));

exports.server = () => {
  sync();
  watch("./src/scss/**/*.scss", scssTask);
  watch(["./src/**/*.html"], minifyHTML);
  watch("./src/js/**/*.js", js);
  watch("*.html").on("change", browserSync.reload);
};
