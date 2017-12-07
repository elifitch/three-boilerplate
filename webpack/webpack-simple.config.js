const sharedConfig = require('./webpack-shared.config');

module.exports = Object.assign(sharedConfig, {
  externals: {
    'three': 'THREE',
    'gsap/TweenMax': 'TweenMax',
    'gsap/TimelineMax': 'TimelineMax'
  }
});
