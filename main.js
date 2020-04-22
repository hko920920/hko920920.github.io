$(document).ready(function () {
    
/*Active spy side bar=====================================*/
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop +400 &&
      section.offsetTop + section.offsetHeight > fromTop +400
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
    
    
//Fashion SHow Modal///////////////////////////////
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    else if(event.target == modal1) {
    modal1.style.display = "none";
  }
    else if(event.target == modal2) {
    modal2.style.display = "none";
  }
    else if(event.target == modal3) {
    modal3.style.display = "none";
  }
    
}
//Fashion SHow Modal///////////////////////////////



//Stritch Modal///////////////////////////////

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
//Stritch Modal///////////////////////////////



//Camscon Modal///////////////////////////////

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
//Camscon Modal///////////////////////////////

//EZEN Modal///////////////////////////////

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}
//EZEN Modal///////////////////////////////


    
/*AOS =======================================*/
    AOS.init({
        easing:'ease',
        duration:1800,
        once: true
    });
    
    
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
    autoplay: true,
  autoplaySpeed: 2000,
});

$('.slider-for1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav1'
});
$('.slider-nav1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for1',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
    autoplay: true,
  autoplaySpeed: 2000,
});    
    
$('.slider-for2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for2',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
    autoplay: true,
  autoplaySpeed: 2000,
});        

$('.slider-for3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav3'
});
$('.slider-nav3').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for3',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
    autoplay: true,
  autoplaySpeed: 2000,
});        
    


$( "#tabs" ).tabs();
  
      
    
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
