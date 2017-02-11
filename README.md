# zeen

zeen is a static site generator written in React and Node, powered by webpack.

## Disclaimer.
There are _lots_ of static site generators out there, many far superior to this one. In particular, if you're looking to use React, you should check out both [Gatsby](https://github.com/gatsbyjs/gatsby) and [React Static Boilerplate](https://github.com/kriasoft/react-static-boilerplate). Those projects are fully featured, stable, and well maintained; zeen has minimal features, is not stable, and is not regularly maintained. I wrote it primarily because I wanted something less opinionated then other projects out there, and because I wanted to learn. But *nothing in this project is stable*. Use it at your own risk, though feel free to file issues if you want.

## Install
`npm install --save zeen`

## Usage
- `zeen post --title="Hello, World."` Create a new post with the title "Hello, World.".
- `zeen build` Build your project for deployment. The site will be built to the `build` directory.

## Thanks
I couldn't have written this without some very helpful prior art from other folks:
- [markdalgleish/static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)
- [This thread in that repo](https://github.com/markdalgleish/static-site-generator-webpack-plugin/issues/34)
- [JXNBLK - Zero Configuration Static Site Generator](http://jxnblk.com/writing/posts/zero-configuration-react-static-site-generator/)
- [spartansystems/react-webpack-static-example](https://github.com/spartansystems/react-webpack-static-example)
