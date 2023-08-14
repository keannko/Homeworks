import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: `${buildFolder}/css`,
        html: `${buildFolder}/`,
        js: `${buildFolder}/js/`
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        js: `${srcFolder}/js/**/*.*`,
        images: `${srcFolder}/img/**/*.*`,
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        js: `${srcFolder}/js/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
}