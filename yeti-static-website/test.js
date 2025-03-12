$(document).ready(function () {
    // Open the first submenu by default and highlight its menu item
    $(".mobile-subnav-container").first().addClass("active").show();
    $(".mobile-navigation-link").first().addClass("highlighted");
  
    $(".mobile-navigation-link").click(function (e) {
      e.preventDefault(); // Prevent default link action
  
      // Remove highlight from all menu links
      $(".mobile-navigation-link").removeClass("highlighted");
  
      // Close other open submenus
      $(".mobile-subnav-container")
        .not($(this).next(".mobile-subnav-container"))
        .removeClass("active")
        .hide();
  
      // Toggle the clicked submenu
      $(this).next(".mobile-subnav-container").toggleClass("active").toggle();
  
      // Highlight the clicked menu link if its submenu is open
      if ($(this).next(".mobile-subnav-container").hasClass("active")) {
        $(this).addClass("highlighted");
      }
    });
  });



  // MOBILE NAV SUB CONTAINER CLICK - SLIDE

$(document).ready(function () {
    // Open the first submenu by default
    $(".mobile-subnav-container").first().addClass("active").show();
  
    $(".mobile-navigation-link").click(function (e) {
      e.preventDefault(); // Prevent default link action
  
      // Close other open submenus except the one being clicked
      $(".mobile-subnav-container")
        .not($(this).next(".mobile-subnav-container"))
        // .slideUp(200)
        .removeClass("active");
  
      // Toggle the clicked submenu
      $(this).next(".mobile-subnav-container")
        .stop(true, true)
        // .slideToggle(200)
        .toggleClass("active");
    });
  });