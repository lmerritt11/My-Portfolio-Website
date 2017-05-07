$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
  console.log()
});

var slider = new IdealImageSlider.Slider({
  selector: '#slider',
  height: auto, // Required but can be set by CSS
  interval: 4000
});
slider.start();