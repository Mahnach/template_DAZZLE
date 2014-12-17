jQuery(document).ready(function($) {
	$(".slider-text1").css({"margin-left": "35%"});
	$(".slider-text2").css({"margin-left": "-100%"});
	$(".slider-text3").css({"margin-left": "-100%"});
	var h = $(".cont-text").width();
	$(".cont-text").height(h + 5);
	$(".sl-btn1").css({"color":"#fc4349"});
	$(".sl-btn2").css({"color":"#fff"});
	$(".sl-btn3").css({"color":"#fff"});
	var h = $(window).height();
	$(".slider-wrapper").height(h);	
	$(".sl-btn1").css({"transform":"scale(1.4)"});

});
jQuery(document).ready(function($) {
	var current = 0;
	$(".sl-btn1").on("click",function(){
		if(current == 1){
			exit;	
		}
			current = 1;
			setTimeout(function(){$(".row1").stop().animate({"margin-top": "0"}, 900 );}, 0);
			setTimeout(function(){$(".row2").stop().animate({"margin-top": "0"}, 900 );}, 50);
			setTimeout(function(){$(".row3").stop().animate({"margin-top": "0"}, 900 );}, 100);
			setTimeout(function(){$(".row4").stop().animate({"margin-top": "0"}, 900 );}, 150);
			setTimeout(function(){$(".row5").stop().animate({"margin-top": "0"}, 900 );}, 200);
			setTimeout(function(){$(".row6").stop().animate({"margin-top": "0"}, 900 );}, 250);
			setTimeout(function(){$(".row7").stop().animate({"margin-top": "0"}, 900 );}, 300);
			setTimeout(function(){$(".row8").stop().animate({"margin-top": "0"}, 900 );}, 350);
			setTimeout(function(){$(".row9").stop().animate({"margin-top": "0"}, 900 );}, 400);
			setTimeout(function(){$(".row10").stop().animate({"margin-top": "0"}, 900 );}, 450);
			$(".slider-text1").css({"display":"block"});
			$(".slider-text2").css({"display":"none"});
			$(".slider-text3").css({"display":"none"});
			setTimeout(function(){$(".slider-text2").stop().animate({"margin-left": "-30%"}, 900 );}, 0);
			setTimeout(function(){$(".slider-text3").stop().animate({"margin-left": "-30%"}, 900 );}, 0);
			setTimeout(function(){$(".slider-text1").stop().animate({"margin-left": "38%"}, 900 );}, 900);
			setTimeout(function(){$(".slider-text1").stop().animate({"margin-left": "35%"}, 200 );}, 900);
			$(".sl-btn1").css({"color":"#fc4349"});
			$(".sl-btn1").css({"transform":"scale(1.4)"});
			$(".sl-btn2").css({"transform":"scale(1)"});
			$(".sl-btn3").css({"transform":"scale(1)"});	
			$(".sl-btn2").css({"color":"#fff"});
			$(".sl-btn3").css({"color":"#fff"});	

	})
	$(".sl-btn2").on("click",function(){		
		var s_h = $(".slider-cont").height();
		if(current == 2){
			exit;
		}
			current = 2;
			setTimeout(function(){$(".row1").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 0);
			setTimeout(function(){$(".row2").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 50);
			setTimeout(function(){$(".row3").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 100);
			setTimeout(function(){$(".row4").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 150);
			setTimeout(function(){$(".row5").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 200);
			setTimeout(function(){$(".row6").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 250);
			setTimeout(function(){$(".row7").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 300);
			setTimeout(function(){$(".row8").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 350);
			setTimeout(function(){$(".row9").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 400);
			setTimeout(function(){$(".row10").stop().animate({"margin-top": - s_h +"px"}, 900 );}, 450);
			$(".slider-text1").css({"display":"none"});
			$(".slider-text2").css({"display":"block"});
			$(".slider-text3").css({"display":"none"});
			setTimeout(function(){$(".slider-text1").stop().animate({"margin-left": "-30%"}, 900 );}, 0);
			setTimeout(function(){$(".slider-text3").stop().animate({"margin-left": "-30%"}, 900 );}, 0);
			setTimeout(function(){$(".slider-text2").stop().animate({"margin-left": "38%"}, 900 );}, 900);
			setTimeout(function(){$(".slider-text2").stop().animate({"margin-left": "35%"}, 200 );}, 900);
			$(".sl-btn1").css({"color":"#fff"});
			$(".sl-btn2").css({"transform":"scale(1.4)"});
			$(".sl-btn1").css({"transform":"scale(1)"});
			$(".sl-btn3").css({"transform":"scale(1)"});
			$(".sl-btn2").css({"color":"#fc4349"});
			$(".sl-btn3").css({"color":"#fff"});	
	
	})
	$(".sl-btn3").on("click",function(){	
		var s_h = $(".slider-cont").height();
		if(current == 3){
			exit;
		}
			current = 3;
			setTimeout(function(){$(".row1").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 0);
			setTimeout(function(){$(".row2").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 100);
			setTimeout(function(){$(".row3").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 200);
			setTimeout(function(){$(".row4").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 300);
			setTimeout(function(){$(".row5").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 400);
			setTimeout(function(){$(".row6").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 500);
			setTimeout(function(){$(".row7").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 600);
			setTimeout(function(){$(".row8").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 700);
			setTimeout(function(){$(".row9").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 800);
			setTimeout(function(){$(".row10").stop().animate({"margin-top": - s_h * 2 +"px"}, 900 );}, 900);
			$(".slider-text1").css({"display":"none"});
			$(".slider-text2").css({"display":"none"});
			$(".slider-text3").css({"display":"block"});
			setTimeout(function(){$(".slider-text1").stop().animate({"margin-left": "-30%"}, 900 );}, 0);
			setTimeout(function(){$(".slider-text2").stop().animate({"margin-left": "-30%"}, 900 );}, 0);
			setTimeout(function(){$(".slider-text3").stop().animate({"margin-left": "38%"}, 900 );}, 900);
			setTimeout(function(){$(".slider-text3").stop().animate({"margin-left": "35%"}, 200 );}, 900);	
			$(".sl-btn1").css({"color":"#fff"});
			$(".sl-btn2").css({"color":"#fff"});
			$(".sl-btn3").css({"transform":"scale(1.4)"});
			$(".sl-btn1").css({"transform":"scale(1)"});
			$(".sl-btn2").css({"transform":"scale(1)"});
			$(".sl-btn3").css({"color":"#fc4349"});	


	})
});



jQuery(document).ready(function($) {
			var h = $(".slider-cont").height();
			var w = $(".slider-cont").width();
			$(".slider-text-wrapper").height(h);
			$(".slider-text-wrapper").width(w);
});	




