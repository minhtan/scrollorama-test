$(document).ready(function() {
    //scroll to
    // $('#toHeader').click(function(){
    // 	$.scrollTo( $('header'), 800 );
    // });
    // $('#toBlock1').click(function(){
    // 	$.scrollTo( $('#block1'), 800 );
    // });
    // $('#toFooter').click(function(){
    // 	$.scrollTo( $('footer'), 800 );
    // });

    //calculate height
    var winHeight = $(window).height();
    $('.story').css('min-height', winHeight);

    //snapWindow
    $('.scrollblock .block').windows({
        snapping: true,
        snapSpeed: 800,
        snapInterval: 1100,
        onScroll: function(scrollPos){
            // scrollPos:Number
        },
        onSnapComplete: function($el){
            // after window ($el) snaps into place
        },
        onWindowEnter: function($el){
            // when new window ($el) enters viewport
        }
    });

    //localScroll
    $('.scrollblock').localScroll(800);

    $('#header').parallax("50%", 0.1);
    $('#block1').parallax("50%", 0.1);
    $('.bg').parallax("50%", 0.4);
    $('#footer').parallax("50%", 0.3);


    //parallax
    var $window = $(window);
    var $header = $('#header');
    var $block1 = $('#block1');
    var $footer = $('#footer');
    var pika = $("#block1 .bg");

    //inview
    $('#header, #block1, #footer').bind('inview', function (event, visible) {
        if (visible == true){
            $(this).addClass("inview");
        }
        else{
          	$(this).removeClass("inview");
        }
    });

    function newPos(x, winHeight, pos, adjuster, inertia){
    	return x + "% " + (-((winHeight + pos) - adjuster) * inertia)  + "px";
    }
    function Move(){
    	var pos = $window.scrollTop();
    	if($header.hasClass("inview")){
    	    $header.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
    	}
    	if($block1.hasClass("inview")){
    	    $block1.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
    	    pika.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
    	}
    	if($footer.hasClass("inview")){
    	    $footer.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
    	}
	}
});

$(window).resize(function(){
	//calculate height
    var winHeight = $(window).height();
    $('.story').css('min-height', winHeight);
});