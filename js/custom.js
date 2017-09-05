$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	$('.slick-slider').slick({
		dots: true,
		responsive: [
				{
				  breakpoint: 768,
				  settings: {
					dots: false
				  }
				},				
			]
	});
	$('.slick-prev').html('<i class="ion-ios-arrow-back"></i>');
	$('.slick-next').html('<i class="ion-ios-arrow-forward"></i>');


	$('li:has(ul) a.button-nav').on('click', function(){
		if($(this).next().is(':hidden')) {
			$(this).next().show();
		}else {
			$(this).next().hide();
		}

	});


	function get_name_browser(){
	    // получаем данные userAgent
	    var ua = navigator.userAgent;    
	    // с помощью регулярок проверяем наличие текста,
	    // соответствующие тому или иному браузеру

	    if (ua.search(/Firefox/) > 0) {
	    	$('.menu a').css({
	    		'font-size':'1.10vw'
	    	});

	    	$('.info-box a').css({
	    		'font-size':'12px'
	    	});
	    }

	}
	 
	// пример использования
	//var browser = get_name_browser();
	//alert(browser);
	get_name_browser();


	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);





