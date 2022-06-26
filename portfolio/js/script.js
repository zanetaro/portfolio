$(function () {

  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    if (window.innerWidth > 599) {
      if (scroll > windowHeight) {
        $('.header-left,.header-right__navi').fadeIn();
      };
    } else {
      if ($(window).scrollTop() > 100) {
        $('.sp-hamburger,.header-left,.header-right__navi').fadeIn();
      }
    }

    $('.js-scroll-set,.js-scroll-set-2').each(function () {
      const targetPosition = $(this).offset().top;

      if (scroll > targetPosition - windowHeight + 200) {
        $(this).addClass('js-scroll-in');
      }

    });

    $('.service__card').each(function (i) {
      const targetPosition = $(this).offset().top;

      if (scroll > targetPosition - windowHeight) {
        const target = this;
        setTimeout(function () {
          $(target).addClass('js-scroll-in');
        }, 200 * i);
      }
    });

    $('.item-number-ball').each(function () {
      const targetPosition = $(this).offset().top;
      if (window.innerWidth > 599) {
        if (scroll > targetPosition - windowHeight + 150) {
          $(this).addClass('js-scroll-ball');
        }
      } else {
        if (scroll > targetPosition - windowHeight + 150) {
          $(this).addClass('js-sp-scroll-ball');
        }
      };
    });

  });

  $('.sp-hamburger ul').each(function () {
    $(this).on('click', function () {
      $(this).toggleClass('js-active');
      $('.header-right').toggleClass('js-open');
      $('.main').toggleClass('js-open');
    });
  });



  $('.pageTop-btn').each(function () {

    $(window).scroll(function () {
      if ($(window).scrollTop() > 60) {
        $('.pageTop-btn').show();
      } else {
        $('.pageTop-btn').hide();
      }
    });

    $(this).on('click', function () {
      $('html,body').animate({ scrollTop: 1 }, '1000');
      return false;
    });

    if (window.innerWidth > 599) {
      $(this).hover(function () {

        $(this).css("opacity", "1");
        $('.pageTop-btn span').css(
          "height", "35px"
        );
      }, function () {
        $(this).css("opacity", ".5");
        $('.pageTop-btn span').css(
          "height", "25px",
        );
      });
    }

  });

  // works.swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    speed: 1000,

    autoplay: {
      delay: 4000,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    breakpoints: {
      768: {
        slidesPerView: 2.1,
      }
    }
  });


  if (window.innerWidth > 1024) {
    const i = $('.header-right__navi-item').index(this);

    $('.header-right__navi-item a').hover(function () {
      const i = $('.header-right__navi-item').index(this);

      if ($('.header-right__navi-item a').eq(i)) {
        $(this).children("span").stop().animate({ "left": "43%" }, 300);
        $(this).children("span").css('border-color', 'rgb(3, 112, 221)');
      };
    }, function () {
      $(this).children("span").stop().animate({ "left": "3px" });
      $(this).children("span").css('border-color', '#333');
    });

    $('.view-more-link').hover(function () {
      $('.view-more-link span').stop().animate({ "left": "45%" });
      $('.view-more-link span').css("border-color", "rgb(3, 112, 221)")
    }, function () {
      $('.view-more-link span').stop().animate({ "left": "3px" });
      $('.view-more-link span').css("border-color", "#333")
    });
  };

});