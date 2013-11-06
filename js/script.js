$(document).ready(function() {
    //scroll to - no need since scrolldesk already implimented the functions
    // $('#toHeader').click(function(){
    // 	$.scrollTo( $('header'), 800 );
    // });
    // $('#toBlock1').click(function(){
    // 	$.scrollTo( $('#block1'), 800 );
    // });
    // $('#toFooter').click(function(){
    // 	$.scrollTo( $('footer'), 800 );
    // });

    //localScroll - no need since scrolldesk already implimented the functions
    // $('.scrollblock').localScroll(800);

    //calculate height of each block (=window height)
    var winHeight = $(window).height();
    $('.story').css('height', winHeight);

    //scroll deck 
    var deck = new $.scrolldeck({
        buttons: '.nav li a',
        slides: '.block',
        duration: 1200,
        easing: 'easeInOutExpo',
        offset: 0
    });

    //snapWindow
    $('.scrollblock .snap').windows({
        snapping: true,
        snapSpeed: 800,
        snapInterval: 1200,
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
    
    //panelsnap
    // $('body').panelSnap({
    //     $menu: false,
    //     menuSelector: 'a',
    //     panelSelector: 'section',
    //     namespace: '.panelSnap',
    //     onSnapStart: function(){},
    //     onSnapFinish: function(){},
    //     directionThreshold: 50,
    //     slideSpeed: 600
    // });

    //parallax
    //.parallax(xPosition, adjuster, inertia, outerHeight) options:
    //xPosition - Horizontal position of the element
    //adjuster - y position to start from
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    // $('#header').parallax("50%", 0.1);
    // $('#block1').parallax("50%", 0.1);
    $('.bg').parallax("50%", 0.4);
    // $('#footer').parallax("50%", 0.3);

    //inview
    $('#header, #block1, #footer').bind('inview', function (event, visible) {
        if (visible == true){
            $(this).addClass("inview");
        }
        else{
          	$(this).removeClass("inview");
        }
    });

    //scrollorama
    var scrollorama = $.scrollorama({
        blocks:'.block',
        enablePin:false
    });
    // best to use fly-in effect with scroll desk when element has 100% width
    scrollorama.animate('#block1 .article',{duration:800, property:'left', start:'-100%', end:'0%', easing:'easeInOutExpo'});
});