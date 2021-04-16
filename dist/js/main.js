/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/tabs/tabs.js":
/*!********************************************!*\
  !*** ./src/blocks/components/tabs/tabs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Start tabs.js
(function () {
  'use strict';
  /**
   * tabs
   *
   * @description The Tabs component.
   * @param {Object} options The options hash
   */

  var tabs = function tabs(options) {
    if (document.querySelector(options.el)) {
      var el = document.querySelector(options.el);
      var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
      var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
      var activeIndex = 0;
      var initCalled = false;
    } else {
      return false;
    }
    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */


    var init = function init() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');

        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };
    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */


    var handleClick = function handleClick(link, index) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        goToTab(index);
      });
    };
    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */


    var goToTab = function goToTab(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('active');
        tabNavigationLinks[index].classList.add('active');
        tabContentContainers[activeIndex].classList.remove('active');
        tabContentContainers[index].classList.add('active');
        activeIndex = index;
      }
    };
    /**
     * Returns init and goToTab
     */


    return {
      init: init,
      goToTab: goToTab
    };
  };
  /**
   * Attach to global namespace
   */


  window.tabs = tabs;
})(); // End tabs.js

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__hamburger').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-opacity').toggleClass('open');
    var innerHeaderHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('header').innerHeight();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-menu').toggleClass('open').css({
      'top': innerHeaderHeight + 'px'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('hidden');
  }); //закрыть при клике вне

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
    var div = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".nav__hamburger, .mobile-menu"); //класс элемента вне которого клик

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      //закрыть popup
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__hamburger').hasClass('open')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav__hamburger').trigger('click');
      }
    }
  });
  /* search */

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__find').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.find-wrp').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.find-wrp input').focus();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__find input').on('blur', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.find-wrp').removeClass('open');
  });
});

/***/ }),

/***/ "./src/blocks/modules/mobile-menu-button/mobile-menu-button.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/mobile-menu-button/mobile-menu-button.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var buttonOpenFilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter-mobile-button');

if (buttonOpenFilter) {
  buttonOpenFilter.on('click', function (elem) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-qna__aside').toggleClass('open') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-qna__aside').hasClass('open')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').text('назад');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-text'));
    }
  });
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
  var div = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".page-qna__aside, .filter-mobile-button"); //класс элемента вне которого клик

  if (!div.is(e.target) && div.has(e.target).length === 0) {
    //закрыть popup
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-qna__aside').hasClass('open')) {
      buttonOpenFilter.trigger('click');
    }
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/tabs/tabs */ "./src/blocks/components/tabs/tabs.js");
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_0__);
 //import "%components%/form/form";
//import "%components%/select/select";
//// import "%components%/mobile-menu/mobile-menu"; 
//import "%components%/video/video";

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_mobile_menu_button_mobile_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/mobile-menu-button/mobile-menu-button */ "./src/blocks/modules/mobile-menu-button/mobile-menu-button.js");

 // import "%modules%/video/video";
// import "%modules%/menu/menu";
// import "%modules%/popup-catalog/popup-catalog";
// import "%modules%/footer/footer";

/* home */
// import "%modules%/banner-home/banner-home";
// import "%modules%/slider-home/slider-home";
// import "%modules%/product-slider-home/product-slider-home";
// import "%modules%/catalog/minicard/minicard";
// import "%modules%/catalog/similar-product/similar-product";
// import "%modules%/top-brands/top-brands";

/* catalog */
// import "%modules%/catalog/catalog-filter/catalog-filter";

/* card */
// import "%modules%/card-moreinfo/card-moreinfo";
// import "%modules%/cart-similar/cart-similar";
// import "%modules%/mapsfilter/mapsfilter";
// import "%modules%/card-callback/card-callback";

/* popup */
// import "%modules%/right-popup/right-popup";
// import "%modules%/form-login/form-login";
// import "%modules%/basket/basketcard/basketcard";

/* basket */
// import "%modules%/basket/basket-aside/basket-aside";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/svg4everybody/dist/svg4everybody.js */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery.inputmask/dist/jquery.inputmask.bundle */ "./node_modules/jquery.inputmask/dist/jquery.inputmask.bundle.js");
/* harmony import */ var jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_inputmask_dist_jquery_inputmask_bundle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default()();
jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).ready(function () {
  swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_3__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_3__["Thumbs"], swiper__WEBPACK_IMPORTED_MODULE_3__["Autoplay"]]);
  /* главная баннер */

  function changeImage(image) {
    var color = image.split(',');
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('.main-slider__bg').attr({
      'style': 'background: linear-gradient(104.26deg, ' + (color[0] ? color[0] : '#99B6C6') + ' -4.69%, rgba(153, 182, 198, 0) 60.13%), ' + (color[1] ? color[1] : color[0]) + ';'
    });
  }

  var bannerHome = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.main-slider__content .swiper-container', {
    autoplay: {
      delay: 10000
    },
    pagination: {
      el: '.swiper-main-slider__dots',
      clickable: true,
      type: 'bullets',
      renderBullet: function renderBullet(index, className) {
        console.log(this.params.autoplay.delay);
        return '<div class="' + className + ' custom-bullet"><span style="animation-duration: ' + (this.params.autoplay.delay + 500) + 'ms;" ></span></div>';
      }
    },
    navigation: {
      nextEl: '.swiper-main-slider__nav-next',
      prevEl: '.swiper-main-slider__nav-prev'
    },
    on: {
      init: function init(data) {
        var acttiveSlide = data.activeIndex;
        var color = data.slides[acttiveSlide].dataset.colorBg;
        changeImage(color);
      },
      slideChangeTransitionStart: function slideChangeTransitionStart(data) {
        var acttiveSlide = data.activeIndex;
        var color = data.slides[acttiveSlide].dataset.colorBg;
        changeImage(color);
      }
    }
  }); // табы в новостях

  if (document.querySelector('[data-tabs=news]')) {
    var tabsDelivery = tabs({
      el: '[data-tabs=news]',
      tabNavigationLinks: '.tab-link',
      tabContentContainers: '.tab-content'
    }).init();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map