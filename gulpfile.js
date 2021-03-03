const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');


const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss'
}
//Función que compila sass




function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src(paths.scss)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('./build/css'))
}

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'imagen Minificada'}))
}

function versionwebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Version WebP Listo'}))
    
}

function watchArchivos() {
    watch(paths.scss, css);

}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, imagenes, versionwebp, watchArchivos)