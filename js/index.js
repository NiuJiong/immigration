$(function(){
	
	
//	导航栏
	if($(window).width()>992){
		$("nav li").mouseover(function(){
			$("nav li").removeClass("active");
			$(this).addClass("active");
			$(".twonav").removeClass("active");
			$(this).find(".twonav").addClass("active");
		});
		$("nav .twonav a").mouseover(function(){
			$("nav .twonav a").removeClass("active");
			$(this).addClass("active");
		});
	}
	
	
	if($(window).width()<992){
		$("nav ul").hide();
		$("nav .cd").click(function(){
			$("nav ul").slideToggle();
		});
	}
})
