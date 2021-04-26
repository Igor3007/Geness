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

// import 'scrollmagic/scrollmagic/uncompressed/plugins/';
// // import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

// import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { TweenMax, TimelineMax, setTween, TweenLite, Linear  } from "gsap"; // Also works with TweenLite and TimelineLite
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import $ from 'jquery';

import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, setTween, TweenLite, Linear, addIndicators, Sine } from "gsap"; // What to import from gsap
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, TweenLite, Linear, Sine);



svgPolyfill();

$(document).ready(function () {

  
const $bigBall = document.querySelector('.about-mouse');
const $smallBall = document.querySelector('.about-mouse-circle');
const $hoverables = document.querySelectorAll('.about .btn');

// Listeners

const container = document.querySelector('.about');

container.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {


//console.log(container.offsetTop)

  TweenMax.to($bigBall, .4, {
    x: e.pageX - 110,
    y: e.pageY- 110 - container.offsetTop

  })

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 10,
    y: e.pageY- 10 - container.offsetTop
  })

}



// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 0.25,
    
  })

  $bigBall.style.cssText = "background-color: transparent; border: 6px solid #84b1ac;";
  $smallBall.style.cssText = "mix-blend-mode: difference";
  $bigBall.querySelector('.about-mouse__icon').style.opacity = 0;
  $bigBall.querySelector('.about-mouse__text').style.opacity = 0;
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })

  $bigBall.style.cssText = "background-color: #84b1ac; border: 0px solid transparent";
  $smallBall.style.cssText = "mix-blend-mode: none";
  $bigBall.querySelector('.about-mouse__icon').style.opacity = 1;
  $bigBall.querySelector('.about-mouse__text').style.opacity = 1;

}

/* scrollmagic */



//const ease = Power4.easeInOut
// const el = document.querySelector('#el')
// const wrapper = document.querySelector('#wrapper')
// const slides = el.querySelectorAll('.swiper-slide')
// const amount = slides.length

// const controller = new ScrollMagic.Controller()

// const horizontalMovement = new TimelineMax()

// const controller2 = new ScrollMagic.Controller({
//   vertical: false
// })

// console.log(`-${(100 / amount) * (amount - 1)}%`)

// horizontalMovement
//   .add([
//     TweenMax.to(wrapper, 1, { x: `-50%` })
//   ])

// new ScrollMagic.Scene({
//   triggerElement: el,
//   triggerHook: 'onLeave',
//   duration: `${amount * 100}%`
// })
//   .setPin(el)
//   .setTween(horizontalMovement)
//   .addTo(controller)

// slides.forEach((item, index) => {
//   console.log(item)
//   //const title = item.querySelector('h1')
//   //const subtitle = item.querySelector('h2')
//   const tween = new TimelineMax()

//  /*  tween
//     .fromTo(title, 1, { x: 0 }, { x: 200 }, 0)
//     .fromTo(subtitle, 1, { x: 600 }, { x: 200 }, 0) */

//   new ScrollMagic.Scene({
//     triggerElement: item,
//     triggerHook: 1,
//     duration: '100%'
//   })
//     .setTween(tween)
//     .addTo(controller2)
// })

console.clear();

// TweenLite.defaultEase = Linear.easeNone;
// var controller = new ScrollMagic.Controller();
// var tl = new TimelineMax();

// var ww = window.innerWidth;

// var noSlides = $(".about-slide").length;
// var slideWidth = $(".about-slide").innerWidth();
// var slideContainerWidth = slideWidth*noSlides-ww;

// console.log(noSlides, slideContainerWidth);

// var ww = window.innerWidth;
// TweenLite.set('#lineSVG',{width:slideContainerWidth + ww})
// TweenLite.set("#greenLine",{drawSVG:"0%"})


// var actionHorizontal = new TimelineMax()
// .to("#slideContainer", 1, {x: -slideContainerWidth})
// .to("#greenLine",1,{drawSVG:"100%"},0)

// var horizontal = createHorizontal();

// function createHorizontal() {
//     return new ScrollMagic.Scene({
//   triggerElement: "#js-wrapper",
//   triggerHook: "onLeave",
//   duration: slideContainerWidth
// })
//   .setPin("#js-wrapper")
//   .setTween(actionHorizontal)
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//   })
//   .addTo(controller);

// }



  
// $(window).resize(function(){

//   ww = window.innerWidth;
//   slideContainerWidth = slideWidth*noSlides-ww;

  
//   horizontal.destroy(true);
//   horizontal = createHorizontal();
  
//   TweenLite.set('#line',{width:slideContainerWidth+ww})
  
//   console.log(ww, slideContainerWidth);

// });
  
// ====================================================================================================

function fnImgMontageReveal(e, t) {
  
  var o = $(".about-slide").outerWidth(),
      count = $(".about-slide").length,
      i = new TimelineMax,
      n = new ScrollMagic.Controller,
      a = $(".about-slide").outerHeight() / 2 - 40;
  if ($(window).width() >= 1024 && $(window).width() > $(window).height()) {
      i.to(".about-container .about-slide", .5, {
          x: -(count-2) * o,
          scale: 1,
          ease: Sine.easeInOut
      }, 0).to(".about-container .about-slide:not(:last-of-type)", .5, {
          opacity: 0,
          ease: Sine.easeInOut
      }, 0).from(".about-container .scroll-slide-left", .1, {
          x: "+=20",
          opacity: 0,
          ease: Linear.easeNone
      }, .45);
      new ScrollMagic.Scene({
          triggerElement: ".about-container",
          offset: a,
          duration: (count-2) * o
      }).setPin(".about-container").setTween(i).addTo(n)
  }
}

fnImgMontageReveal()
 
  
  Swiper.use([Pagination, Navigation, Autoplay, Mousewheel, EffectFade]);
/* главная баннер */

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

            //console.log(this.params.autoplay.delay)

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


// const about = new Swiper('.about__wrp .swiper-container', {
     

//   slidesPerView: 1,
//   spaceBetween: 0,
//   mousewheel: true,
//   simulateTouch: false,
//   freeMode: true,
//   calculateHeight: true,

//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },

//   on: {
//     slideChange: function (data) {
      
//       if($(window).width() > 760){
//         $('html,body').stop().animate({ scrollTop: $('.about').offset().top + 40 }, 300);
//       //alert('ee')
//       }
      
      
//     },
//     progress: function (data, progress) {
//       //console.log(progress)

//       const scrollFadeOut = $('.scroll-fade-out');
//       const scrollFadeIn = $('.scroll-fade-in');


//       //console.log(progress)

//       var fadeInc = 0.3;
//       fadeInc = fadeInc + (progress*2);
//         if(fadeInc > 1)  fadeInc = 1;
//         if(fadeInc < 0)  fadeInc = 0;

//       var fadeDec = 1;
//       fadeDec = fadeDec - (progress*3);
//         if(fadeDec > 1)  fadeDec = 1;
//         if(fadeDec < 0)  fadeDec = 0;

//       var scale = 0.65;
//         scale = scale + (progress);
//         if(scale > 1)  scale = 1  

//       var scaleDec = 1;
//         scaleDec = scaleDec - (progress);
//         if(scaleDec > 1)  scaleDec = 1  
//         if(scaleDec < 0.6)  scaleDec = 0.6  

//       if(fadeInc > 0.97){
//         $('.scroll-slide-left').addClass('open')
//       }else{
//         $('.scroll-slide-left').removeClass('open')
//       }
        

//       if (progress){
//         scrollFadeOut.css({
//             opacity: fadeDec,
//             transform: 'scale('+scaleDec+')'
//           })
//         scrollFadeIn.css({
//             opacity: fadeInc
//           })
//       }

//       $('.about-slide').each(function(index, item){

        

//         if(index != 0){

//           $(this).css({
//             'transform': 'scale('+scale+')'
//           })
//         }
//         else{
//           // $(this).find('.about-slide__right').css({
//           //   'transform': 'scale('+scale+')'
//           // })
//         }

       
//       })

     

//     },

//     reachEnd: function (data) {
//       //$('html,body').stop().animate({ scrollTop: $('.about').offset().top - 50 }, 300);
//       //alert('end')
//     },

//     fromEdge: function (data) {
//       if($(window).width() > 760){
//         $('html,body').stop().animate({ scrollTop: $('.about').offset().top + 40 }, 100);
//       }
      
//     },
//   }
     
    
     
// });

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
