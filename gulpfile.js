"use strict";

//импорт пакетов
const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");

//путь, куда компилировать
const dist = "./dist/";

//ТАСКИ:

//для отслеживания изменений в html-файл
gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

//черновая компиляция скриптов
gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
												//полифилы, чтоб в старый код занести определённые фичи, которых нет в старых браузерах
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
					 //отправляем в папку dist
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

//из src берём любые файлы
gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
					 //перезагрузка страницы
                .on("end", browsersync.reload);
});

//серверит файлы, которые в dist
gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
	 //чтоб gulp следил за определёнными файлами
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

//запускает все эти три таски
gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js"));

//чистовая компиляция скриптов
gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

//задача запускается по умолчанию
gulp.task("default", gulp.parallel("watch", "build"));