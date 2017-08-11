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
	
	
	
//	slide
	$("slide .tele").mouseover(function(){
		$("slide .popup").removeClass("active");
		$(this).next().addClass("active");
	});

	
//	nav点击效果
	$(".twonav div").click(function(){
		var index = $(this).index()+1;
		
		if(index >= $(".twonav div").length){
			index = 0;
		}
		var top = $(".navclick:eq("+index+")").offset().top-268;
		console.log(index);
//		$(window).scrollTop.animate(function(){
//			$(window).scrollTop(top);
//		},1000);
		$('html,body').animate({
			scrollTop:top
		},500);
	});
	
	
//	form
	$(".butto").click(function(){
		$(".message").addClass("active");
	});
	$(".x").click(function(){
		$(".message").removeClass("active");
	});
	if($(window).width()<768){
		$(".qq").click(function(){
			$(".message").addClass("active");
		});
	}
	$(".message .big .content form .label").click(function(){
		if($(this).children(".che").is(".active")){
			$(this).children(".che").removeClass("active");
			if($(this).is(".lastlax")){
				$(".qita").removeClass("active");
			}
		}else{
			$(this).children(".che").addClass("active");
			if($(this).is(".lastlax")){
				
				$(".qita").addClass("active");
				
			}
		}	
	});
})
