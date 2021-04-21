import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import Swiper, {
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
  Mousewheel,
} from 'swiper';
import 'jquery.inputmask/dist/jquery.inputmask.bundle';
import './import/jquery.fancybox.min';

import './import/TweenMax.min';

import $ from 'jquery';



svgPolyfill();

$(document).ready(function () {

  
const $bigBall = document.querySelector('.about-mouse');
const $smallBall = document.querySelector('.about-mouse-circle');
//const $hoverables = document.querySelectorAll('.hoverable');

// Listeners

const container = document.querySelector('.about');

container.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// Move the cursor
function onMouseMove(e) {


// console.log(e)

  TweenMax.to($bigBall, .4, {
    x: e.pageX - 110,
    y: e.pageY- 110 - 1500

  })

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 10,
    y: e.pageY- 10 - 1500
  })

}



// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
  
  Swiper.use([Pagination, Navigation, Thumbs, Autoplay, Mousewheel]);
/* главная баннер */

function changeImage (image){

  var color = image.split(',')
  
  $('.main-slider__bg').attr({
      'style': 'background: linear-gradient(104.26deg, '+(color[0] ? color[0] : '#99B6C6')+' -4.69%, rgba(153, 182, 198, 0) 60.13%), '+(color[1] ? color[1] : color[0])+';'
  })

}

const bannerHome = new Swiper('.main-slider__content .swiper-container', {
    autoplay: {
        delay: 10000,
      },

    pagination: {
        el: '.swiper-main-slider__dots',
        clickable: true,
        type: 'bullets',
        
        renderBullet: function (index, className) {

            console.log(this.params.autoplay.delay)

            return '<div class="' + className + ' custom-bullet"><span style="animation-duration: '+(this.params.autoplay.delay+500)+'ms;" ></span></div>';
        },
    },

    navigation: {
        nextEl: '.swiper-main-slider__nav-next',
        prevEl: '.swiper-main-slider__nav-prev',
    },

    
    on: {
    
        init: function (data) {
          const acttiveSlide = data.activeIndex;
          const color = data.slides[acttiveSlide].dataset.colorBg;
    
          changeImage(color)
        },
    
        slideChangeTransitionStart: function (data) {
          const acttiveSlide = data.activeIndex;
          const color = data.slides[acttiveSlide].dataset.colorBg;

          changeImage(color)
        },
      },
});


const about = new Swiper('.about__wrp .swiper-container', {
     

  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  simulateTouch: false,
  freeMode: true,
  calculateHeight: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  on: {
    slideChange: function (data) {
      
      if($(window).width() > 760){
        $('html,body').stop().animate({ scrollTop: $('.about').offset().top + 40 }, 300);
      //alert('ee')
      }
      
      
    },
    progress: function (data, progress) {
      console.log(progress)

      const scrollFadeOut = $('.scroll-fade-out');
      const scrollFadeIn = $('.scroll-fade-in');


      console.log(progress)

      var fadeInc = 0.3;
      fadeInc = fadeInc + (progress*2);
        if(fadeInc > 1)  fadeInc = 1;
        if(fadeInc < 0)  fadeInc = 0;

      var fadeDec = 1;
      fadeDec = fadeDec - (progress*3);
        if(fadeDec > 1)  fadeDec = 1;
        if(fadeDec < 0)  fadeDec = 0;

      var scale = 0.65;
        scale = scale + (progress);
        if(scale > 1)  scale = 1  

      var scaleDec = 1;
        scaleDec = scaleDec - (progress);
        if(scaleDec > 1)  scaleDec = 1  
        if(scaleDec < 0.6)  scaleDec = 0.6  

      if(fadeInc > 0.97){
        $('.scroll-slide-left').addClass('open')
      }else{
        $('.scroll-slide-left').removeClass('open')
      }
        

      if (progress){
        scrollFadeOut.css({
            opacity: fadeDec,
            transform: 'scale('+scaleDec+')'
          })
        scrollFadeIn.css({
            opacity: fadeInc
          })
      }

      $('.about-slide').each(function(index, item){

        

        if(index != 0){

          $(this).css({
            'transform': 'scale('+scale+')'
          })
        }
        else{
          // $(this).find('.about-slide__right').css({
          //   'transform': 'scale('+scale+')'
          // })
        }

       
      })

    },

    reachEnd: function (data) {
      //$('html,body').stop().animate({ scrollTop: $('.about').offset().top - 50 }, 300);
      //alert('end')
    },

    fromEdge: function (data) {
      if($(window).width() > 760){
        $('html,body').stop().animate({ scrollTop: $('.about').offset().top + 40 }, 100);
      }
      
    },
  }
     
    
     
});

const news = new Swiper('.news__list .swiper-container', {
     

  slidesPerView: 4,
  spaceBetween: 60,
  mousewheel: true,
  freeMode: true,
  observer: true,
  observeParents: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    580: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
    
     
});

// табы в новостях

if (document.querySelector('[data-tabs=news]')) {
  var tabsDelivery = tabs({
    el: '[data-tabs=news]',
    tabNavigationLinks: '.tab-link',
    tabContentContainers: '.tab-content',
     
  }).init();
}

});

$('.burger').on('click', function(event){
    
  $('body').toggleClass('hidden')
  $(this).toggleClass('open')
  $('.header__nav').toggleClass('open')

  const info = $('.header__info').clone()
  const signup = $('.header__signup').clone()

  if(!$('.header__nav > nav').find('div').is('.header__info')){
    $('.header__nav > nav').append(info)
    $('.header__nav > nav').append(signup)
  }
  
})

function initInputMask(){
  $("input[type=tel]").inputmask({
      mask: '+7(999) 999-99-99',
      showMaskOnHover: false,
      getemptymask: true,
      clearIncomplete: true,

      oncomplete: function(elem){
          elem.target.setAttribute('area-valid', 'true')
      },
      onincomplete: function(elem){
          if(elem.target.value)
            elem.target.setAttribute('area-valid', 'false')
      },
      oncleared: function(elem){
          elem.target.removeAttribute('area-valid')
      },
      onKeyValidation: function(elem){
          console.log(elem)
      }
  });
}

//modal
$(document).on('click','[data-modal="callback"]', function(event){
    
  const elem = $(this);
   
  $.fancybox.open({
    src  : elem.data('src'),
    type : 'ajax',
    opts : {
      afterShow : function( instance, current ) {

        //init mask
        initInputMask();
  
      }

    }
  });
  
})

//modal
$(document).on('click','[data-modal="phone"]', function(event){
    
  const elem = $(this);
   
  $.fancybox.open({
    src  : '.header-phone__list',
    type : 'inline',
     
  });
  
})
