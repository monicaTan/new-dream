$(function(){
	function navMouse(){
		$(".nav-ul li a").mouseover(function(){
			var spanW = $(this).find('span').width(),
			    spanFW = Math.floor(spanW),
				emW = $(this).find('em').width(),
				emFW = Math.floor(emW);

			$(this).find('em').css({"display":"inline-block","min-width":spanFW+"px","_width":spanFW+"px"});
			$(this).find('span').hide().next('em').show();
		});
		$(".nav-ul li a").mouseout(function(){
			$(this).find('span').show().next('em').hide();
		});
		if (screen.width < 768) {
			$(".nav-ul li a").unbind("mouseover");
			$(".nav-ul li a").unbind("mouseout");
		};
	};
	navMouse();
})