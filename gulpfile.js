//plug-in
var gulp = require('gulp');
var sass = require('gulp-sass');
var changed  = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require("imagemin-pngquant");
var imageminMozjpeg = require("imagemin-mozjpeg");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

var dist = './pages';

// 加工しないファイルをコピー
gulp.task('copy', function(done) {
  gulp.src(
    [ 'src/*.html', 'src/img/favicon/favicon.ico'],
    { base: 'src' }
  )
  .pipe(gulp.dest(dist));
  done();
});

// sassをコンパイル
gulp.task('sass', function(done){
  gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(dist + '/css'));
  done();
});

gulp.task("webpack", function(done){
  webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(dist + '/js'));
  done();
});

// 画像圧縮
// 圧縮前と圧縮後のディレクトリを定義
var paths = {
  srcDir : 'src',
  dstDir : dist
};

var imageminOption = [
  imageminPngquant({ quality: [0.65, 0.8] }),
  imageminMozjpeg({ quality: 85 }),
  imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256
  }),
  imagemin.optipng(),
  imagemin.svgo()
];

// jpg,png,gif画像の圧縮タスク
gulp.task('imagemin', function(done){
  var srcGlob = paths.srcDir + '/**/*.+(jpg|jpeg|png|gif|svg)';
  var dstGlob = paths.dstDir;
  gulp.src(srcGlob)
    .pipe(changed(dstGlob)) //差分のみ圧縮
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest(dstGlob));
  done();
});

gulp.task('default', gulp.series('copy', 'sass', 'webpack', 'imagemin'), function(done) {
  done();
});
