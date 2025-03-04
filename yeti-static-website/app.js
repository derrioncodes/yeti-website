$(window).on('scroll', function() {
  $('.full-image-collection-banner-text').each(function() {
    let elementTop = $(this).offset().top + 300;
    let windowBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < windowBottom) {
      $(this).addClass('visible');
    }
  });
});

$(window).on('scroll', function() {
  $('.two-column-homepage-leftside-text').each(function() {
    let elementTop = $(this).offset().top + 300;
    let windowBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < windowBottom) {
      $(this).addClass('visible');
    }
  });
});

$(window).on('scroll', function() {
  $('.two-column-homepage-rightside-text').each(function() {
    let elementTop = $(this).offset().top + 300;
    let windowBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < windowBottom) {
      $(this).addClass('visible');
    }
  });
});

$(document).ready(function(){
  $('.carousel-wrapper').slick({
    initialSlide: 0,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '40px',
    arrows: true,
    dots: false,


  });

  var slidesCount = $('.slick-slide').length;
  // $('.slick-counter').html(slidesCount);
  
  countSlide();
  $('.slick-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      countSlide();
  });
  function countSlide() {
      var current = $('.slick-slider').find('.slick-current').attr('data-slick-index');

      if(current != 18){

      }
      $('.count').html(Number(current) + 1 );

      
  }
 
});




  