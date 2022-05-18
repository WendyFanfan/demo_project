//引入gulp任务
const gulp = require('gulp')
//引入html任务
const htmlmin = require('gulp-htmlmin')
//引入css任务
const cssmin = require('gulp-cssmin')
//引入sass任务
const sass = require('gulp-sass')(require('sass'))
//引入js任务
const uglify = require('gulp-uglify')
//引入babel任务
const babel = require('gulp-babel')
//引入del任务
const del = require('del')
//引入server服务器任务
const server = require('gulp-webserver')

//执行html打包压缩任务
const htmlHandler = function () {
    //表示从那个目录开始执行任务
    return gulp.src('./src/**/*.html')
        //管道函数
        .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input 		checked />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS 
        }))
        //打包任务执行完毕最终放到哪里去
        .pipe(gulp.dest('./dist'))
}
//执行css打包压缩任务
const cssHandler = function () {
    return gulp.src('./src/sass/*.scss')
        //在压缩之前先把sass转成css
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
}
//执行js打包压缩任务
const jsHandler = function () {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}
//执行libs和img和fonts、data移动任务
const libsHandler = function () {
    return gulp.src('./src/libs/**')
        .pipe(gulp.dest('./dist/libs'))
}
const imgHandler = function () {
    return gulp.src('./src/img/**')
        .pipe(gulp.dest('./dist/img'))
}
const fontsHandler = function () {
    return gulp.src('./src/fonts/**')
        .pipe(gulp.dest('./dist/fonts'))
}
const dataHandler = function () {
    return gulp.src('./src/data/**')
        .pipe(gulp.dest('./dist/data'))
}
//执行del删除任务
const delHandler = function () {
    return del(['./dist/'])
}
// 创建一个 webserver 任务
const serverHandler = function () {
    return gulp.src('./dist')
        .pipe(server({
            host: 'localhost',          // 配置打开浏览器的域名
            port: 8887,                 // 配置打开浏览器的端口号
            livereload: true,           // 自动刷新浏览器
            open: './index.html'  // 默认打开 dist 文件夹下的哪个文件
        }))
}
// 创建一个 watch 任务
const watchHandler = function () {
    gulp.watch('./src/sass/**', cssHandler)
    gulp.watch('./src/js/**', jsHandler)
    gulp.watch('./src/**/*.html', htmlHandler)
    gulp.watch('./src/libs/**', libsHandler)
    gulp.watch('./src/img/**', imgHandler)
    gulp.watch('./src/fonts/**', fontsHandler)
    gulp.watch('./src/data/**', dataHandler)
}

//最终导出模块任务
// module.exports = {
//     htmlHandler,
//     cssHandler,
//     jsHandler,
//     libsHandler,
//     imgHandler
// }

//批量执行任务，异步任务
// module.exports.default = gulp.parallel(htmlHandler, cssHandler, jsHandler, libsHandler, imgHandler)

//批量执行任务，同步任务
// module.exports.default = gulp.series(htmlHandler, cssHandler, jsHandler, libsHandler, imgHandler)

module.exports.default = gulp.series(
    //先删除再执行其他的任务
    delHandler,
    module.exports.default = gulp.parallel(htmlHandler, cssHandler, jsHandler, libsHandler, imgHandler, fontsHandler, dataHandler),
    //必须保证其他任务打包运行完毕后再开启咱们服务器
    module.exports.default = gulp.parallel(serverHandler, watchHandler)
)