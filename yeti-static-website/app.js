$(window).on('scroll', function() {
  $('.full-image-collection-banner-text').each(function() {
    let elementTop = $(this).offset().top;
    let windowBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < windowBottom) {
      $(this).addClass('visible');
    }
  });
});


  