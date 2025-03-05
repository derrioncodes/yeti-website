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

// $(document).ready(function(){
  
//   $('.carousel-wrapper').slick({
//     initialSlide: 0,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     centerMode: false,
//     centerPadding: '40px',
//     arrows: true,
//     dots: false,


//   });

//   var slidesCount = $('.slick-slide').length;
//   $('.slick-counter').html(slidesCount);
  
//   countSlide();
//   $('.slick-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//       countSlide();
//   });
//   function countSlide() {
//       var current = $('.slick-slider').find('.slick-current').attr('data-slick-index');

//       if(current != 18){

//       }
//       $('.count').html(Number(current) + 1 );

      
//   }
 
// });

// $(document).ready(function(){

//   let $carouselNodes = $('.carousel-section');
  
//   if($carouselNodes != null){
//     $carouselNodes.each((node) =>{
//       console.log(node.querySelectorAll('.carousel-wrapper'));
      
      
      

      // node.querySelectorAll('.carousel-wrapper').slick({
      //   initialSlide: 0,
      //   infinite: true,
      //   slidesToShow: 5,
      //   slidesToScroll: 1,
      //   centerMode: false,
      //   centerPadding: '40px',
      //   arrows: true,
      //   dots: false,
    
    
      // });
    
      // var slidesCount = $('.slick-slide').length;
      // $('.slick-counter').html(slidesCount);
      
      // countSlide();
      // $('.slick-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      //     countSlide();
      // });
      // function countSlide() {
      //     var current = $('.slick-slider').find('.slick-current').attr('data-slick-index');
    
      //     if(current != 18){
    
      //     }
      //     $('.count').html(Number(current) + 1 );
    
          
      // }
      
//     })
//   }
  
  
 
// });


// GPT


// $(document).ready(function(){

//   let $carouselNodes = $('.carousel-section');
  
//   if ($carouselNodes.length) { // More accurate check than `!= null`
//     $carouselNodes.each((index, node) => { // node is the second argument

//       node.querySelectorAll('.carousel-wrapper').slick({
//         initialSlide: 0,
//         infinite: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: '40px',
//         arrows: true,
//         dots: false,
    
    
//       });
    
      
//     });
//   }
  
  
 
// });


// var slidesCount = $('.slick-slide').length;
      // $('.slick-counter').html(slidesCount);
      
      // countSlide();
      // $('.slick-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      //     countSlide();
      // });
      // function countSlide() {
      //     var current = $('.slick-slider').find('.slick-current').attr('data-slick-index');
    
      //     if(current != 18){
    
      //     }
      //     $('.count').html(Number(current) + 1 );
    
          
      // }

$(document).ready(function(){
  var helpers = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
  };

  $('.carousel-wrapper').each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      initialSlide: 0,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '40px',
      arrows: true,
      dots: false,
    });

    if ($(this).find('.carousel-item').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }
  
    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .slides-number-active').html(helpers.addZeros(currentSlide + 1));
    });
  
    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
  });

  

});

//   $('.slick-next').on('click', function () {
//     console.log('test');
//     $('.slider-holder').slick('slickGoTo', 5);
// });





  