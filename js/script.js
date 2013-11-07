$(document).ready(function() {
    //scroll to - no need if scrolldesk or localScroll is already called
    // $('#to-header').click(function(){
    // 	$.scrollTo( $('header'), 800 );
    // });
    // $('#to-block1').click(function(){
    // 	$.scrollTo( $('#block1'), 800 );
    // });
    // $('#to-footer').click(function(){
    // 	$.scrollTo( $('footer'), 800 );
    // });

    //localScroll - no need if scrolldesk is already called
    $('.scrollblock').localScroll(800);

    //calculate height of each block (=window height), add top property to .detector
    var winHeight = $(window).height();
    $('.story').height(winHeight);
    $('.detector').css('top',winHeight - 1);

    //scroll deck - test purpose only
    // var deck = new $.scrolldeck({
    //     buttons: '.nav li a',
    //     slides: '.block',
    //     duration: 1200,
    //     easing: 'easeInOutExpo',
    //     offset: 0
    // });

    //snapWindow - snapping section into view port
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
    
    //panelsnap - snap scrolling
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

    //parallax - test purpose only
    //.parallax(xPosition, adjuster, inertia, outerHeight) options:
    //xPosition - Horizontal position of the element
    //adjuster - y position to start from
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    // $('#header').parallax("50%", 0.1);
    // $('#block1').parallax("50%", 0.4);
    // $('#footer').parallax("50%", 0.3);

    //inview detect if '.detector' of a section is in view port
    $('.detector').bind('inview', function (event, visible) {
        if (visible == true){
            $(this).addClass("inview");
        }
        else{
          	$(this).removeClass("inview");
        }
    });

    //scrollorama - where the magic happens
    //initiate function
    var scrollorama = $.scrollorama({
        blocks:'.block'
    });
    //on block change - set .current to nav links
    scrollorama.onBlockChange(function() {
        $('.nav ul li a').removeClass('current');
        var toCurrentBlock = '#to-' + $('.detector.inview').parent().attr('id');
        $(toCurrentBlock).addClass('current');
    });
    //animations
    scrollorama
        // .animate('#block1 .bg',{duration:winHeight, property:'top', start:'-100%', pin:true})
        .animate('#block1 .thedog',{duration:600, property:'right', start:'150%', end:'26%', pin:true})
        .animate('#block1 .bg',{delay:800, duration: 400, property:'top', start:'20%', end:'-20%', pin: true});
});