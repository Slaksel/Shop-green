"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const del = require("del");
const server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp
    .src("./src/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("images", function () {
  return gulp
    .src("src/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ progressive: true }),
        imagemin.svgo(),
      ])
    )
    .pipe(gulp.dest("src/img"));
});

gulp.task("webp", function () {
  return gulp
    .src("src/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "src/fonts/**/*.{woff2,woff}",
        "src/*.html",
        "src/img/**/*.{svg,png,jpeg,jpg}",
        "src/js/*.js",
        "src/*.ico",
      ],
      {
        base: "src",
      },
    )
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("src/sass/**/*.scss", gulp.series("css", "refresh"));
  gulp.watch("src/*.html", gulp.series("build", "refresh"));
  gulp.watch("src/js/*.js", gulp.series("build", "refresh"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "webp"));

gulp.task("start", gulp.series("build", "server"));