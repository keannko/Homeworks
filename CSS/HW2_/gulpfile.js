import gulp from "gulp"

import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy, html, server, image } from './gulp/tasks/dev.js'
import { reset, scss } from './gulp/tasks/build.js'


function watcher() {
    gulp.watch(path.watch.js, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
}

const mainTasks = gulp.parallel(copy, html, scss, image)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)