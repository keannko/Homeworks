import uglify from 'gulp-uglify'
import rename from 'gulp-rename';
import fileinclude from "gulp-file-include"
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export const image = () => (
	gulp.src(app.path.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}

export const copy = () => {
    return app.gulp.src(app.path.src.js)
    .pipe(uglify())
    .pipe(
        rename({
            suffix: '.min',
            extname: '.js',
        })
    )
    .pipe(app.gulp.dest(app.path.build.js))
}

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        port: 3000,
    })
}