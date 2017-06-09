var gulp         = require('gulp');
var less         = require('gulp-less');
var cssnano 	   = require('gulp-cssnano');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync');
var lessFunction = require('less-plugin-functions');
var riot         = require('gulp-riot');

//打包全局js依赖
gulp.task('js-core', function() {
	return gulp.src([
		'src/script/core/flexible.js',
		'src/script/core/riot.js',
		'src/script/core/zepto.js',
		'src/script/core/ready.js'
		// 'src/script/core/appcache.js'
	]).pipe(concat('core.js'))
	.pipe(gulp.dest('assets/script'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify().on('error', function(e) {
    	console.log(e);
    }))
	.pipe(gulp.dest('assets/script'))
});

//压缩其他js
gulp.task('js-ui', function() {
	return gulp.src([
		'src/script/ui/base.js',
		'src/script/ui/tips.js'
	]).pipe(concat('tips.min.js'))
	.pipe(uglify().on('error', function(e) {
    	console.log(e);
  }))
	.pipe(gulp.dest('assets/script'))
})

//打包全局css
gulp.task('css-base', function () {
	return gulp.src('src/less/base/base.less')
	.pipe(less({
    plugins: [
			new lessFunction()
		]
	}))
	.pipe(postcss([ autoprefixer({ browsers: ['last 3 versions', 'ios 6', 'ios 7', 'android 4'] }) ]))
	.pipe(gulp.dest('assets/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(cssnano({zindex: false}))
	.pipe(gulp.dest('assets/css'));
});

//打包及压缩页面的css
gulp.task('css-main', function () {
  var plumber      = require('gulp-plumber'),
      notify       = require('gulp-notify');

  return gulp.src('src/less/common/*')
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(less({
    plugins: [
			new lessFunction()
		]
	}))
  .pipe(postcss([ autoprefixer({ browsers: ['last 3 versions', 'ios 6', 'ios 7', 'android 4'] }) ]))
  .pipe(plumber.stop())
	//压缩样式
	.pipe(cssnano({zindex: false}))
  .pipe(gulp.dest('assets/css'));
});

//可用于提升riot文件执行效率
gulp.task('riot', function() {
	  return gulp.src('tags/*')
			.pipe(riot())
			.pipe(uglify().on('error', function(e) {
		    	console.log(e);
		   }))
			.pipe(gulp.dest('tag'))
});

//开启实时编译全局css
gulp.task('css-base-watch', function () {
	  return gulp.watch('src/less/base/*', ['css-base']);
});
//开启实时编译页面css
gulp.task('css-watch', function () {
    return gulp.watch('src/less/common/*', ['css-main']);
});
//启动一个实时的测试服务器环境，实时检查代码更新
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
          baseDir: '.'
        },
			  // https: true,
				watchOptions: {
				    ignoreInitial: true,
				    ignored: ['node_modules']
				},
        files: ['*.html', '[^_]**/*.html', 'assets'],
        notify: true
    });
});

//开启开发环境
//实时监听src下的less文件编译成css，并启用一个测试服务器
gulp.task('default', ['css-watch', 'css-base-watch', 'browser-sync']);
