
function Tab(src,des){
	$(src).on("click","li",function(){
		var ind=$(this).index();
		$(des).find("section").eq(ind).show().siblings().hide();
		$(src).find("li").eq(ind).addClass("active").siblings().removeClass("active");
	})
}

