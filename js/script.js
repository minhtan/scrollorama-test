$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
    });
    scrollorama.animate('#block1',{
        duration:400, property:'opacity'
    });
    $('#toHeader').click(function(){
    	$.scrollTo( $('header'), 800 );
    });
    $('#toBlock1').click(function(){
    	$.scrollTo( $('#block1'), 800 );
    });
    $('#toFooter').click(function(){
    	$.scrollTo( $('footer'), 800 );
    });
});