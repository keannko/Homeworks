import { deleteAsync } from 'del'
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 99 versions'],
                cascade: false,
            })
        )
        .pipe(cleanCss({}))
        .pipe(
            rename({
                suffix: '.min',
                extname: '.css',
            })
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
};

export const reset = () => {
    return deleteAsync(['dist'])
}