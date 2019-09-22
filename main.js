$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    AOS.init({
        easing:'ease',
        duration:1800,
        once: true
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

});

(function(){
    var current =0;
    var max =0;
    var container;
    var interval;
    function init(){
        container =jQuery(".slide ul");
        max = container.children().length;

        console.log("init");
        interval = setInterval(next, 3000);

        events();

    }
    function events(){
        jQuery("button.prev").on("click", prev);
        jQuery("button.next").on("click", next);
    }

    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();

    }
    function animate(){
    var moveX=current *799;
    TweenMax. to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut} );

    clearInterval(interval);
    interval = setInterval(next, 3000);

    }


    jQuery (document).ready(init);
})();
(function(){
    var current =0;
    var max =0;
    var container;
    var interval;
    function init(){
        container =jQuery(".slide2 ul");
        max = container.children().length;

        console.log("init");
        interval = setInterval(next, 6000);

        events();

    }
    function events(){
        jQuery("button.prev2").on("click", prev);
        jQuery("button.next2").on("click", next);
    }

    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();

    }
    function animate(){
        var moveX=current *799;
        TweenMax. to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut} );

        clearInterval(interval);
        interval = setInterval(next, 6000);

    }


    jQuery (document).ready(init);
})();

(function(){
    var current =0;
    var max =0;
    var container;
    var interval;
    function init(){
        container =jQuery(".Marketing ul");
        max = container.children().length;

        console.log("init");
        interval = setInterval(next, 4000);

        events();

    }
    function events(){
        jQuery("button.prev3").on("click", prev);
        jQuery("button.next3").on("click", next);
    }

    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();

    }
    function animate(){
        var moveX=current *1225;
        TweenMax. to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut} );

        clearInterval(interval);
        interval = setInterval(next, 4000);

    }


    jQuery (document).ready(init);
})();

(function(){
    var current =0;
    var max =0;
    var container;
    var interval;
    function init(){
        container =jQuery(".Theater ul");
        max = container.children().length;

        console.log("init");
        interval = setInterval(next, 4000);

        events();

    }
    function events(){
        jQuery("button.prev4").on("click", prev);
        jQuery("button.next4").on("click", next);
    }

    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();

    }
    function animate(){
        var moveX=current *900;
        TweenMax. to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut} );

        clearInterval(interval);
        interval = setInterval(next, 4000);

    }


    jQuery (document).ready(init);
})();
(function(){
    var current =0;
    var max =0;
    var container;
    var interval;
    function init(){
        container =jQuery(".cam ul");
        max = container.children().length;

        console.log("init");
        interval = setInterval(next, 6000);

        events();

    }
    function events(){
        jQuery("button.prev5").on("click", prev);
        jQuery("button.next5").on("click", next);
    }

    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();

    }
    function animate(){
        var moveX=current *1000;
        TweenMax. to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut} );

        clearInterval(interval);
        interval = setInterval(next, 6000);

    }


    jQuery (document).ready(init);
})();