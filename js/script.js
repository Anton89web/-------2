// **************Корусель Presentation*****************

$(document).ready(function(){
  $('.presentation__corusel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
	      breakpoint:1200 ,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
    ]
  });
});

// **************Появление menu-absolute*****************

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-absolute'),
    menuItem = document.querySelectorAll('.close__btn'),
    hamburger = document.querySelector('.header__bottom__nav-item');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-absolute-active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('menu-absolute-active');
    })
  })
})

// **************Корусель Отзывы******************

$(document).ready(function(){
  $('.corusel__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev_com"></button>',
    nextArrow: '<button type="button" class="slick-next_com"></button>',
  });
});

// **************Корусель Отзывы на сторонних ресусах******************
$(document).ready(function(){
  $('.resurse__wrapper').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows:false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
	      breakpoint:992 ,
	      settings: {
	        slidesToShow: 5,
	      }
	    },
      {
	      breakpoint:768,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
      {
	      breakpoint:576 ,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
      {
	      breakpoint:425 ,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
    ]
  });
});

// **************Корусель Foto******************

$(document).ready(function(){
  $('.foto__wrapper').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    prevArrow: '<button type="button" class="slick-prev_com"></button>',
    nextArrow: '<button type="button" class="slick-next_com"></button>',
    responsive: [
      {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
      {
	      breakpoint: 999,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      },
        
	    },
    ]
  });
});

// // *****************Медленный скролл*******************

// $("a[href='#top']").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, 2000);
//   return false;
// });

// // *****************Увелечение цирф*******************

// $(document).ready(function () {

//   $('.count').each(function () {
//      $(this).prop('Counter',0).animate({
//       Counter: $(this).text()
//       }, {
//        duration: 10000,
//        easing: 'swing',
//        step: function (now) {
//           $(this).text(Math.ceil(now));
//        }
//       });
//   });
// }); 

// // *****************Открытие меню*******************
 
// window.addEventListener('DOMContentLoaded', () => {
//   const menuItem = document.querySelectorAll('.mobile_menu_close'),
//     menu = document.querySelector('.mobile_menu'),
//     hamburger = document.querySelector('.hamburger');
    
//     hamburger.addEventListener('click', () => {
//     menu.classList.toggle('mobile_menu_active');
//   });

//   menuItem.forEach(item => {
//     item.addEventListener('click', () => {
//       menu.classList.remove('mobile_menu_active');
//     });
//   });
// });	

