const sharedConfig = require('./webpack-shared.config');

module.exports = Object.assign(sharedConfig, {
  externals: {
    'three': 'THREE',
    'gsap/TweenMax': 'TweenMax',
    'gsap/TimelineMax': 'TimelineMax'
  }
});
// module.exports = function(env) {
//   // console.log('====================================')
//   // console.log(arg)
//   // console.log('====================================')
//   // const foo = Object.assign(sharedConfig, {
//   //   output: Object.assign(sharedConfig.output, {
//   //     publicPath: env.assetPath
//   //   }),
//   //   externals: {
//   //     'three': 'THREE',
//   //     'gsap/TweenMax': 'TweenMax',
//   //     'gsap/TimelineMax': 'TimelineMax'
//   //   }
//   // })
//   console.log('====================================')
//   console.log(process.env.ASSET_PATH)
//   console.log('====================================')
//   return Object.assign(sharedConfig, {
//     externals: {
//       'three': 'THREE',
//       'gsap/TweenMax': 'TweenMax',
//       'gsap/TimelineMax': 'TimelineMax'
//     }
//   });
// };
