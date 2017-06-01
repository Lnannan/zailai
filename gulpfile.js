 var gulp=require('gulp');
var gulputil=require('gulp-util');

var uglifys=require('gulp-uglify');
var cssmin=require('gulp-minify-css');
var minifyHtml=require('gulp-minify-html');

//压缩js
gulp.task('myjs',function(){
	gulp.src('js/*.js').pipe(uglifys()).pipe(gulp.dest('haha/js'));
});
//压缩html
gulp.task('myhtml', function () {
	gulp.src('*.html').pipe(minifyHtml()).pipe(gulp.dest('haha'));
});
//压缩css
gulp.task('mycss', function () {
	gulp.src('css/*.css').pipe(cssmin()).pipe(gulp.dest('haha/css'));
});

gulp.task('default',['myjs','myhtml','mycss']);

