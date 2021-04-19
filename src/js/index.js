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
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
     
    
     
});

// табы в новостях

if (document.querySelector('[data-tabs=news]')) {
  var tabsDelivery = tabs({
    el: '[data-tabs=news]',
    tabNavigationLinks: '.tab-link',
    tabContentContainers: '.tab-content'
  }).init();
}

});