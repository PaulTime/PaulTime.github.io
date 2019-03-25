const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const cssnested = require('postcss-nested');

gulp.task('html', () =>
    gulp.src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'))
);

gulp.task('css', () =>
    gulp.src('./src/*.css')
        .pipe(postcss([
            cssnested(),
            cssnano(),
        ]))
        .pipe(gulp.dest('./'))
);

gulp.task('watch', () => {
    gulp.watch('src/*', gulp.series('html', 'css'));
});
