const gulp=require("gulp");
const loadPlugins=require("gulp-load-plugins")();
//压缩js
gulp.task("commpareJS",function(){
	gulp.src("./js/*.js")
		.pipe(loadPlugins.uglify())
		.pipe(gulp.dest("./js"))
})
//压缩css
gulp.task("commpareCss",function(){
	gulp.src("./css/&.css")
		.pipe(loadPlugins.cleanCss())
		.pipe(gulp.dest("./css"))
})
//合并js
gulp.task("concattask",function(){
	gulp.src("./js/*.js")
		.pipe(loadPlugins.concat("all.js"))
		.pipe(gulp.dest("./js"))
})
//合并css
gulp.task("concatCss",function(){
	gulp.src("./css/*.css")
		.pipe(loadPlugins.concat("all.css"))
		.pipe(gulp.dest("./css"))
})
//服务器
gulp.task("server",function(){
	loadPlugins.connect.server({
		port:3000,
		livereload:true,
		root:["./"]
	})
})
//md5加密
gulp.task("mdjstask",function(){
	gulp.src("./js/all.js")
		.pipe(loadPlugins.rev())
		.pipe(gulp.dest("./js"))
		.pipe(loadPlugins.rev.manifest("js.json"))
		.pipe(gulp.dest("./"))
})

gulp.task("mdcsstask",function(){
	gulp.src("./css/all.css")
		.pipe(loadPlugins.rev())
		.pipe(gulp.dest("./css"))
		.pipe(loadPlugins.rev.manifest("css.json"))
		.pipe(gulp.dest("./"))
})


gulp.task("change",function(){
	gulp.src(["./*.json","./index.html"])
		.pipe(loadPlugins.revCollector({
			replaceReved:true,
			dirReplacements:{
				 'js/': 'js/',
				 "css/":"css/"
				}
			}))
	.pipe(gulp.dest("./"))
})
