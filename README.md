# Slendr [![Build Status](https://travis-ci.org/joseluisq/slendr.svg?branch=master)](https://travis-ci.org/joseluisq/slendr) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/slendr/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/slendr?branch=master) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Lightweight and responsive slider for modern browsers.

Built on the top of [ES6](https://babeljs.io/docs/learn-es2015/) with minimum Javascript and [CSS3 Hardware Acceleration](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) performance in mind.

## Install

#### CommonJS

```sh
npm install slendr --save-dev
```

#### AMD

```js
requirejs(['slendr'], Slendr => {

})
```

#### Browser

##### Bower
```sh
bower install slendr --save
```

##### CDN
The UMD and style files are also available on [unpkg](https://unpkg.com):

```html
<link rel="stylesheet" href="https://unpkg.com/slendr/dist/slendr.min.css">
<script src="https://unpkg.com/slendr/dist/slendr.min.js"></script>
```

You can use the library via `window.Slendr`

## Usage

Base styles:

```html
<link rel="stylesheet" href="https://unpkg.com/slendr/dist/slendr.min.css">
```

_You can customize your slider editing the `slendr.scss` file._

Markup:

```html
<div class="slendr">
  <nav class="slendr-direction">
    <a href="#" class="slendr-prev"><i class="fa fa-angle-left"></i></a>
    <a href="#" class="slendr-next"><i class="fa fa-angle-right"></i></a>
  </nav>

  <nav class="slendr-control"></nav>

  <div class="slendr-slides">
    <section class="slendr-slide" data-src="slide1.jpg"></section>
    <section class="slendr-slide" data-src="slide2.jpg"></section>
    <section class="slendr-slide" data-src="slide3.jpg"></section>
  </div>
</div>
```

API:

```js
const Slendr = require('slendr')

const slider = Slendr({
  slideshow: true,
  ...
})
```

## Options

```js
{
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
}
```

## Methods

#### prev()
Move to previous slide.

```js
slendr.prev()
```

#### next()
Move to next slide.

```js
slendr.next()
```

#### move(index)
Move slider by index.

```js
slendr.move(2)
```

#### play()
Play the slideshow.

```js
slendr.play()
```

#### pause()
Pause the slideshow.

```js
slendr.pause()
```

## Events

#### move
Trigger when slider moves to previous or next slide.

```js
slendr.on('move', (direction, index, element) => {
})
```

#### prev
Trigger when slider moves to previous slide.

```js
slendr.on('prev', (index, element) => {
})
```

#### next
Trigger when slider moves to next slide.

```js
slendr.on('next', (index, element) => {
})
```

#### play
Trigger when play the slideshow.

```js
slendr.on('play', (index) => {
})
```

#### pause
Trigger when pause the slideshow.

```js
slendr.on('pause', (index) => {
})
```

## Development

```sh
npm start
```

## Contributions

[Pull requests](https://github.com/joseluisq/slendr/pulls) and [issues](https://github.com/joseluisq/slendr/issues) are very appreciated.

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
