# three-boilerplate
A modern boilerplate for three.js projects 🎉

I whipped this up as a convenient starting point that will make three.js and shader development easier.  Clone and you're ready to go with webpack, babel, GLSLify, a hot reloading dev server and a basic three.js scene including some extremely basic GLSLified shaders.


## Installation
I find it easist to create new projects based on this repo with a little shell script.  If you drop this in your `.bashrc` or similar, you'll be good to go.
``` bash
alias NewThreeProject="git clone git@github.com:elifitch/three-boilerplate.git && rm -rf ./three-boilerplate/.git && mv ./three-boilerplate "
```
`$ NewThreeProject my-project-name`

If you like to have three.js projects in a monorepo, you can do the same thing in an NPM script.
``` json
"new-project": "git clone git@github.com:elifitch/three-boilerplate.git && rm -rf ./three-boilerplate/.git && mv ./three-boilerplate "
```
`$ npm run new-project my-project-name`


## Usage
* `npm run start` => fires up the dev server and watches files for changes
* `npm run build` => normal build with babel and all that
* `npm run build-simple` => includes three.js from cdnjs, doesn't transpile. Great for Codepen.
* `ASSET_ENV="http://my-asset-domain.com/" npm run build-simple` => Sets webpack [publicPath](https://webpack.js.org/guides/public-path/). Works on both build commands.


## Features
* Three.js
* GLSLify for easy shader development
* Support for obj/mtl loading
* GSAP for easy animation
* Babel for nice ES6+ stuff
* Builds with webpack
* Hot reloading dev server


## Future
* Turn it into a CLI since that's a thing people do now I guess
