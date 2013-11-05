$(document).ready(function() {
	//scrollorama
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
    });
    scrollorama.animate('#block1',{
        duration:400, property:'opacity'
    });

    //scroll to
    $('#toHeader').click(function(){
    	$.scrollTo( $('header'), 800 );
    });
    $('#toBlock1').click(function(){
    	$.scrollTo( $('#block1'), 800 );
    });
    $('#toFooter').click(function(){
    	$.scrollTo( $('footer'), 800 );
    });

    //calculate height
    var winHeight = $(window).height();
    $('.block').css('min-height', winHeight);

    //snapWindow
    $('.scrollblock .block').windows({
        snapping: true,
        snapSpeed: 500,
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
});
