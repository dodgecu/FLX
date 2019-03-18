$(document).on('ready', function () {

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function () {
    $('.preloader').fadeOut(1000);
  });

  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

  function initParallax() {
    $('#home').parallax('50%', 0.3);

  }

  initParallax();

  /*-------------------------------------------------------------------------------
    LazyLoad
  -------------------------------------------------------------------------------*/
  function loadMobileBg(selector, value) {
    const isMobile = 'ontouchstart' in window && window.innerWidth < 769;
    if (isMobile) {
      selector.setAttribute("data-bg", value);
    }
  }

  const lazyLoadParams = {
    elements_selector: '.lazy',
    load_delay: 300,
    callback_enter: () => {
      const bg = document.getElementById("home");
      loadMobileBg(bg, "url(img/home-bg-mobile.jpg)");
    }
  }

  const lazyLoadInstance = new LazyLoad(lazyLoadParams);



  /*-------------------------------------------------------------------------------
    Back top
  -------------------------------------------------------------------------------*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });


});
