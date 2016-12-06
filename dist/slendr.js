(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Slendr"] = factory();
	else
		root["Slendr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global module */

	var _emitus = __webpack_require__(1);

	var _emitus2 = _interopRequireDefault(_emitus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var animating = false;
	  var current = 0;
	  var timeout = 0;
	  var slide = null;

	  var opts = _extends({
	    container: '.slendr',
	    selector: '.slendr-slides > .slendr-slide',
	    animationClass: '.slendr-animate',
	    directionNavPrev: '.slendr-prev',
	    directionNavNext: '.slendr-next',
	    slideActive: '.slendr-active',
	    slideShowClass: '.slendr-show',
	    animationSpeed: 900,
	    slideshow: true,
	    slideshowSpeed: 4000,
	    directionNavs: true,
	    keyboard: false,
	    controlNavs: true,
	    controlNavClass: '.slendr-control',
	    controlNavClassActive: '.slendr-control-active'
	  }, options);

	  var container = document.querySelector(opts.container);
	  var selectorContainer = opts.selector.substr(0, opts.selector.search(' '));
	  var slidesContainer = container.querySelector(selectorContainer);
	  var slides = getElements(opts.selector, slidesContainer);
	  var controlNavList = [];
	  var containerWidth = container.offsetWidth;

	  opts.animationClass = opts.animationClass.replace(/^\./g, '');

	  init();

	  var emitr = (0, _emitus2.default)({
	    prev: prev,
	    next: next,
	    move: function move(i) {
	      return goTo(i);
	    }
	  });

	  return emitr;

	  function init() {
	    slides.forEach(function (slide) {
	      return background(slide);
	    });

	    /* istanbul ignore if */
	    if (slides.length < 2) {
	      return;
	    }

	    displayByIndex(current);
	    controlNavs();
	    controlNavActiveItem(current);
	    slideshow();
	    bindEvents();
	    directionNavs();
	    keyboard();
	  }

	  /* istanbul ignore next */
	  function prev() {
	    if (animating) return;

	    moveBy('prev');
	  }

	  /* istanbul ignore next */
	  function next() {
	    if (animating) return;

	    moveBy('next');
	  }

	  /* istanbul ignore next */
	  function moveBy(direction) {
	    var indx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

	    animating = true;
	    clearTimeout(timeout);

	    display(slides[current]);

	    if (indx !== -1) {
	      current = indx;
	    } else {
	      current = direction === 'next' ? current + 1 : current - 1;

	      if (current > slides.length - 1) {
	        current = 0;
	      }

	      if (current < 0) {
	        current = slides.length - 1;
	      }
	    }

	    slide = slides[current];

	    display(slide);

	    slidesContainer.classList.add(opts.animationClass);

	    translateX(slidesContainer, direction === 'next' ? '-' + containerWidth + 'px' : containerWidth + 'px');
	    translateX(slide, direction === 'next' ? containerWidth + 'px' : '-' + containerWidth + 'px');

	    controlNavActiveItem(current);

	    setTimeout(function () {
	      animating = false;
	      slidesContainer.classList.remove(opts.animationClass);

	      transform(slidesContainer, 'none');
	      transform(slides[current], 'none');
	      displayByIndex(current);

	      emitr.emit('move', [direction, current, slide]);
	      emitr.emit(direction, [current, slide]);

	      slideshow();
	    }, opts.animationSpeed + 260);
	  }

	  function goTo(i) {
	    if (!animating && current !== i && i >= 0 && i < slides.length) {
	      moveBy(current - i < 0 ? 'next' : 'prev', i);
	    }
	  }

	  /* istanbul ignore next */
	  function slideshow() {
	    if (opts.slideshow) {
	      timeout = setTimeout(next, opts.slideshowSpeed);
	    }
	  }

	  function background(slide) {
	    var src = slide.getAttribute('data-src');
	    slide.style.setProperty('background-image', 'url(\'' + src + '\')');
	  }

	  function translateX(el) {
	    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    transform(el, 'translateX(' + x + ')');
	  }

	  function transform(el, val) {
	    el.style.setProperty('-webkit-transform', val);
	    el.style.setProperty('-moz-transform', val);
	    el.style.setProperty('transform', val);
	  }

	  /* istanbul ignore next */
	  function bindEvents() {
	    window.addEventListener('resize', function () {
	      containerWidth = container.offsetWidth;
	    }, false);
	  }

	  function controlNavs() {
	    /* istanbul ignore if */
	    if (!opts.controlNavs) {
	      return;
	    }

	    var control = container.querySelector(opts.controlNavClass);

	    /* istanbul ignore if */
	    if (!control) {
	      opts.controlNavs = false;
	      return;
	    }

	    var el = void 0;
	    var ul = document.createElement('ul');

	    empty(control);

	    /* istanbul ignore next */

	    var _loop = function _loop(i) {
	      el = document.createElement('a');
	      el.addEventListener('click', function (evnt) {
	        goTo(i);
	        evnt.preventDefault();
	      }, false);
	      ul.appendChild(el);
	      controlNavList.push(el);
	    };

	    for (var i = 0; i < slides.length; i++) {
	      _loop(i);
	    }

	    control.appendChild(ul);
	  }

	  function directionNavs() {
	    /* istanbul ignore next */
	    if (!opts.directionNavs) {
	      return;
	    }

	    var prevNav = container.querySelector(opts.directionNavPrev);
	    var nextNav = container.querySelector(opts.directionNavNext);

	    /* istanbul ignore next */
	    if (prevNav && nextNav) {
	      prevNav.addEventListener('click', function (evnt) {
	        evnt.preventDefault();
	        prev();
	      }, false);
	      nextNav.addEventListener('click', function (evnt) {
	        evnt.preventDefault();
	        next();
	      }, false);
	    } else {
	      opts.directionNavs = false;
	    }
	  }

	  function keyboard() {
	    if (!opts.keyboard) {
	      return;
	    }

	    /* istanbul ignore next */
	    document.addEventListener('keyup', function (evnt) {
	      if (evnt.which === 37) {
	        prev();
	      }

	      if (evnt.which === 39) {
	        next();
	      }
	    }, false);
	  }

	  function displayByIndex(i) {
	    slides.forEach(function (el, n) {
	      return display(el, i === n, i === n);
	    });
	    container.setAttribute('data-slendr-length', slides.length);
	  }

	  function controlNavActiveItem(i) {
	    opts.controlNavClassActive = opts.controlNavClassActive.replace(/^\./g, '');

	    if (opts.controlNavs && slides.length > 1) {
	      controlNavList.forEach(function (item, n) {
	        controlNavList[n].classList.remove(opts.controlNavClassActive);
	      });

	      controlNavList[i].classList.add(opts.controlNavClassActive);
	    }
	  }

	  function display(el) {
	    var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	    var active = opts.slideActive.replace(/^\./g, '');
	    var show = opts.slideShowClass.replace(/^\./g, '');

	    if (!yes) {
	      el.classList.remove(show);
	    } else {
	      el.classList.add(show);
	    }

	    if (cls) {
	      el.classList.add(active);
	    } else {
	      el.classList.remove(active);
	    }
	  }

	  function getElements(selector) {
	    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	    return Array.prototype.slice.call(parent.querySelectorAll(selector));
	  }

	  /* istanbul ignore next */
	  function empty() {
	    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	    while (el && el.firstChild) {
	      el.removeChild(el.firstChild);
	    }
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/* global module */

	module.exports = function () {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var list = [];
	  var api = _extends({ on: on, off: off, emit: emit }, obj);

	  function on(name, fn) {
	    list.push({ name: name, fn: fn });
	  }

	  function off(name) {
	    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	    list.forEach(function (e, i) {
	      /* istanbul ignore if */
	      if (e.name === name && e.fn === fn) {
	        list.splice(i, 1);
	      }

	      /* istanbul ignore if */
	      if (e.name === name && !fn) {
	        list.splice(i, 1);
	      }
	    });
	  }

	  function emit(name) {
	    var _this = this;

	    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    list.forEach(function (e) {
	      /* istanbul ignore next */
	      if (e && e.name === name && typeof e.fn === 'function') {
	        e.fn.apply(_this, args);
	      }
	    });
	  }

	  return api;
	};

/***/ }
/******/ ])
});
;