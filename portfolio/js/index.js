// $(document).ready(function(){
//     $('#custom-nav').open(function(){
//       $('#custom-nav').slideUp('slow');
//     });
// });

$(document).ready(function(){
   $(".fade").css('opacity',0).delay(1500).animate({opacity:1}, 1000);
});

$(document).ready(function(){
   $(".fade-2").css('opacity',0).delay(500).animate({opacity:1}, 1000);
});


$(document).ready(function () {
    $("#custom-nav").effect("bounce", { times:4, distance:200 }, 400);
});

function clickSet() {
 circularnav.classList.toggle("closed")
 circularnav.classList.toggle("clicked");
  if (circularnav.classList.contains("closed")) {
    // freshly closed button
    var pseudoBefore = window.getComputedStyle(
document.querySelector('.ss-icon'), ':before'
).animation
  }
}

var circularnav = document.getElementsByClassName("ss-icon")[0];
circularnav.addEventListener("click", clickSet, false);

circularnav.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  
        clickSet();
    }
});


$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', '#fbfbfb'), ('border-bottom','1px solid black');
       } else {
          $('#navbar').css('background-color', 'transparent');
       }
   });
});


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}






