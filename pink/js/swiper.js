define(function(require,exports,module){
	require("swiper.min.js")
	function lunbo(ele){
		var mySwiper=new Swiper(ele,{
	      autoplay:1000,
	      autoplayDisableOnInteraction : false,
		  pagination: '.swiper-pagination',
		  paginationClickable: true


		})
	}

	exports.lunbo=lunbo;
})
