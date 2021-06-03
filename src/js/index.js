import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import Swiper, {
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
  Mousewheel,
  EffectFade,
} from 'swiper';
import 'jquery.inputmask/dist/jquery.inputmask.bundle';
import './import/jquery.fancybox.min';

import $ from 'jquery';

import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, setTween, TweenLite, Linear, addIndicators, Sine } from "gsap"; // What to import from gsap
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, TweenLite, Linear, Sine);



svgPolyfill();

$(document).ready(function () {

  $('.email-submit__input input').on('focus', function(){
    $('.email-submit__btn').removeClass('vsbl')
  })
  $('.email-submit__input input').on('blur', function(){
    $('.email-submit__btn').addClass('vsbl')
  })

 
  
  Swiper.use([Pagination, Navigation, Autoplay, Mousewheel, EffectFade]);


/*============================================================ 
swiper home page banner
============================================================*/

function changeImage (image){

  var color = image.split(',')
  
  $('.main-slider__bg').attr({
      'style': 'background: linear-gradient(104.26deg, '+(color[0] ? color[0] : '#99B6C6')+' -4.69%, rgba(153, 182, 198, 0) 60.13%), '+(color[1] ? color[1] : color[0])+';'
  })

}

const bannerHome = new Swiper('.main-slider__content .swiper-container', {

    effect: 'fade',

    autoplay: {
        delay: 10000,
      },

    pagination: {
        el: '.swiper-main-slider__dots',
        clickable: true,
        type: 'bullets',
        
        renderBullet: function (index, className) {
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

/*============================================================ 
swiper home page about
============================================================*/

const about = new Swiper('.about__wrp .swiper-container', {
     

  slidesPerView: 2,
  spaceBetween: 0,
  mousewheel: false,
  freeMode: true,
  calculateHeight: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  on: {
    progress: function (data, progress) {
      if(progress > 0.15){
        $('.about-mouse').fadeOut(300)
      }else {
        $('.about-mouse').fadeIn(300)
      }
    }
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
  autoHeight: true,

    },
    940: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    
  },

  
     
});

/*============================================================ 
swiper news
============================================================*/

const news = new Swiper('.news__list .swiper-container', {
     

  slidesPerView: 4,
  spaceBetween: 60,
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

/*============================================================ 
swiper services details
============================================================*/

const servicesDetails = new Swiper('.services-others__list .swiper-container', {
     

  slidesPerView: 4,
  spaceBetween: 60,
  observer: true,
  observeParents: true,

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


/*============================================================ 
swiper page about
============================================================*/

const pageAbout = new Swiper('[data-swiper="about"]', {

  slidesPerView: 1,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  effect: 'fade',

  autoplay: {
      delay: 10000,
    },

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  pagination: {
    el: '.swiper-about-slider__dots',
    clickable: true,
    type: 'bullets',
        renderBullet: function (index, className) {
            return '<div class="' + className + ' custom-bullet"><span style="animation-duration: '+(this.params.autoplay.delay+500)+'ms;" ></span></div>';
        },
    },

    navigation: {
        nextEl: '.swiper-about-slider__nav-next',
        prevEl: '.swiper-about-slider__nav-prev',
    },
    
     
});

/*============================================================ 
swiper page about license
============================================================*/

const license = new Swiper('[data-swiper="license"]', {
     
  slidesPerView: 4,
  spaceBetween: 60,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-license-slider__nav-next',
    prevEl: '.swiper-license-slider__nav-prev',
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
$(document).on('click','[data-tooltip="phone"]', function(event){
    
  const elem = $(this);
   
   elem.parent().find('.header-phone__list').toggleClass('open')
  
})

function filterElem (elem){
  const container = elem.parent().data('filter');
  const id = elem.data('filter-id');

  elem.parent().find('li').removeClass('active')
  elem.addClass('active')

  $('[data-filter-list="'+container+'"] > div').each(function(){

    if($(this).is('[data-filter-id]')){
      if($(this).data('filter-id') === id){
        $(this).show()
      }else{
        $(this).hide()
      }
    }

  })
}


$(document).on('click', '[data-filter] li', function(){

  filterElem($(this))

})

ymaps.ready(function () {

  try {

    var myMap = new ymaps.Map('map-container', {
        center: [0,0], 
        zoom: 10,
        controls: []
      }, {
        suppressMapOpenBlock: true
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );

    mapSetting.forEach(function(item, index){

        var point = item.mapPointCoordinats.split(',')

        var myPlacemark = new ymaps.Placemark(point, {
          hintContent: item.mapHintContent,
          balloonContent: item.mapBaloonContent
        }, {
          iconLayout: 'default#image',
          iconImageHref: item.mapPointIcon,
          iconImageSize: [60, 60],
          iconImageOffset: [-30, -60]
        });
  
        myMap.geoObjects.add(myPlacemark);

    })

    myMap.setBounds(myMap.geoObjects.getBounds(), { checkZoomRange: true, zoomMargin: 15 }).then(function () { if (myMap.getZoom() > 15) myMap.setZoom(15); });
    myMap.controls.add('zoomControl');
    myMap.controls.add('fullscreenControl');

  } catch {

    console.info('Нет координат для карты');

 }


});