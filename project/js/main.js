$(function () {
  // 윈도우 자체잡음
var wind = $(window),
  header = $('.page-header'),
  headerOffsetTop = header.offset().top;
  
  console.log(headerOffsetTop);

  // wind.on('scroll',funciton)
  wind.scroll(function(){
    if($(this).scrollTop() >= headerOffsetTop){
      header.addClass('sticky');
    }
    else{
      header.removeClass('sticky');
    }
  });   

  
$('.slider').bxSlider({
  // 수평이동
mode: 'horizontal',
auto : true,
autoHover : true,
// autoControls : true,
speed: 2000,
});

$('.multiple_slider').bxSlider({
  minSlides:4,
  maxSlides:4,
  slideWidth:1000,
  slideMargin:30,
  moveSlides:1,
  pager:false
});


// modal
$('.login').click(function(){
  $('.modal').show();
});
$('.exit-btn').click(function(){
  $('.modal').hide();
})




});


