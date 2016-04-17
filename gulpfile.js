// ---------- Plugins and paths ----------

var gulp = require("gulp"),
    clean = require("gulp-clean"),
    zip = require("gulp-zip"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cssnano = require("gulp-cssnano"),
    htmlreplace = require("gulp-html-replace"),
    eslint = require("gulp-eslint"),
    scsslint = require("gulp-scss-lint"),
    bump = require("gulp-bump"),
    git = require("gulp-git"),
    tag_version = require("gulp-tag-version"),
    paths = {
        // All JS files - for linting
        allscripts : ["src/app/**/*.js", "gulpfile.js"],
        // Only source JS files - for building the artefact
        appscripts : ["src/app/app.module.js", "src/app/**/*.js"],
        // All scss files
        styles     : "src/assets/styles/*.scss",
        // All image files
        images     : "src/assets/images/**/*.png"
    };

// ---------- Code lint and tidy up tasks ----------

// Clean /dist and remove everything
gulp.task("clean", function () {
  return gulp.src("dist/*", {read:false})
    .pipe(clean({
        force : true
    }));
});

// Check the JS code against ESLint standards
gulp.task("eslint", function() {
  return gulp.src(paths.allscripts).pipe(eslint({
    extends : "eslint:recommended",
    rules : {
        "quotes" : [1, "double"],
        "semi"   : [1, "always"]
    },
    globals : {
        "angular" : true,
        "appkit"  : true,
        "require" : true
    }
  }))
  .pipe(eslint.format())
  .pipe(eslint.failOnError()); // Fail task on lint errors
});

// Check the SCSS code against scss-lint standards
gulp.task("scsslint", function() {
  return gulp.src(paths.styles)
    .pipe(scsslint())
    .pipe(scsslint.failReporter()); // Report failures in the console
});

// Combination task which checks the .js and .scss files against coding standards
gulp.task("code-check", ["eslint", "scsslint"]);

// ---------- Production build tasks ----------

// Build an artefact and zip everything up
gulp.task("build", ["scripts", "bower_components", "styles", "html", "images", "index", "misc"], function() {
  return gulp.src("dist/*")
    .pipe(zip("appkit.zip"))
    .pipe(gulp.dest("dist"));
});

// Combine all the src JS, minify and then uglify
gulp.task("scripts", function() {
  return gulp.src(paths.appscripts)
    .pipe(concat("app.js"))
    .pipe(gulp.dest("dist"))
    .pipe(rename("app.min.js"))
    .pipe(uglify()) // Causes problems loading bower.json
    .pipe(gulp.dest("dist"));
});

// Combine sccs into one file, compile into css, minify
gulp.task("styles", function() {
  return gulp.src(paths.styles)
    .pipe(sass().on("error", sass.logError)) // Log sass errors
    .pipe(concat("app.min.css"))
    .pipe(cssnano())
    .pipe(gulp.dest("dist"));
});

// Move all the html into /dist
gulp.task("html", function() {
  return gulp.src("src/app/**/*.html")
    .pipe(gulp.dest("dist/src/app"));
});

// Move the images into /dist
gulp.task("images", function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest("dist/assets/img"));
});

// Move index.html into /dist and replace the filepaths as required
gulp.task("index", function() {
  return gulp.src("index.html")
    .pipe(htmlreplace({
        "css" : "app.min.css",
        "js"  : "app.min.js"
    }))
    .pipe(gulp.dest("dist"));
});

// Copy all the required bower dependencies into /dist
gulp.task("bower_components", function() {
  return gulp.src(["bower_components/angular/angular.min.js",
                   "bower_components/angular-animate/angular-animate.min.js",
                   "bower_components/angular-aria/angular-aria.min.js",
                   "bower_components/angular-material/angular-material.min.js",
                   "bower_components/angular-route/angular-route.min.js",
                   "bower_components/angular-material/angular-material.min.css",
                   "bower_components/font-awesome/**"],
                   {base : "bower_components/"})
    .pipe(gulp.dest("dist/bower_components"));
});

// Move other misc files into /dist
gulp.task("misc", function() {
  return gulp.src(["bower.json", "package.json", "README.md"])
    .pipe(gulp.dest("dist/"));
});

// ---------- Local development build tasks ----------

// Compiles scss into css without minifying so debugging is easier
gulp.task("styles-dev", function() {
  return gulp.src(paths.styles)
    .pipe(concat("app.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("app.styles.css"))
    .pipe(gulp.dest("dist"));
});

// ---------- Bump version number tasks ----------

// Pre-release update for bower and npm versions
gulp.task("bump-prerelease", function() {
  gulp.src(["./bower.json", "./package.json"])
  .pipe(bump({
        type  : "prerelease",
        preid : "SNAPSHOT"
    }))
  .pipe(gulp.dest("./"));
});

// Micro update for bower and npm versions
gulp.task("bump-patch", function() {
  gulp.src(["./bower.json", "./package.json"])
  .pipe(bump({
        type : "patch"
    }))
  .pipe(gulp.dest("./"));
});

// Minor update for bower and npm versions
gulp.task("bump-minor", function() {
  gulp.src(["./bower.json", "./package.json"])
  .pipe(bump({
        type : "minor"
    }))
  .pipe(gulp.dest("./"));
});

// Major update for bower and npm versions
gulp.task("bump-major", function() {
  gulp.src(["./bower.json", "./package.json"])
  .pipe(bump({
        type : "major"
    }))
  .pipe(gulp.dest("./"));
});

// ---------- Git tasks ----------

// Tag the git repository using the version number in the package.json
gulp.task("git-tag", function() {
  return gulp.src(["./package.json"])
    .pipe(git.commit("Releasing new version"))
    .pipe(tag_version());
});

// ---------- Watch task ----------

// Rerun tasks when a file changes, for local development
gulp.task("watch", function() {
  gulp.watch(paths.styles, ["styles-dev"]);
});

// ---------- Release tasks ----------

// Dev release
gulp.task("dev-release",   ["code-check", "build"]);
// Check code standards, update the version numbers as
// needed, create the release artefact, tag the branch in git and commit it
gulp.task("micro-release", ["code-check", "bump-patch", "build", "git-tag"]);
gulp.task("minor-release", ["code-check", "bump-minor", "build", "git-tag"]);
gulp.task("major-release", ["code-check", "bump-major", "build", "git-tag"]);

// ---------- Default task ----------

// Compile the scss into css but don"t minify incase of debugging, watch for changes
gulp.task("default", ["code-check", "styles-dev", "watch"]);
