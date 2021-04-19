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

import $ from 'jquery';


svgPolyfill();

$(document).ready(function () {
  
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
  freeMode: true,
  calculateHeight: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  on: {
    slideChange: function (data) {
      
      if($(window).width() > 760){
        $('html,body').stop().animate({ scrollTop: $('.about').offset().top - 50 }, 300);
      //alert('ee')
      }
      
      
    },
    reachBeginning: function (data) {
      //$('html,body').stop().animate({ scrollTop: $('.about').offset().top - 50 }, 300);
      //alert('start')
    },
    reachEnd: function (data) {
      //$('html,body').stop().animate({ scrollTop: $('.about').offset().top - 50 }, 300);
      //alert('end')
    },
    fromEdge: function (data) {
      if($(window).width() > 760){
        $('html,body').stop().animate({ scrollTop: $('.about').offset().top - 50 }, 100);
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