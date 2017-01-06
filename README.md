# Fusebox Google Closure Compiler Plugin

[![NPM](https://nodei.co/npm/fusebox-closure-plugin.png)](https://nodei.co/npm/fusebox-closure-plugin/)
[![Build Status](https://travis-ci.org/matthiasak/fusebox-closure-plugin.svg?branch=master)](https://travis-ci.org/matthiasak/fusebox-closure-plugin)
![](https://img.shields.io/github/issues/matthiasak/fusebox-closure-plugin.svg)
![](https://img.shields.io/github/forks/matthiasak/fusebox-closure-plugin.svg)
![](https://img.shields.io/github/stars/matthiasak/fusebox-closure-plugin.svg)
![](https://img.shields.io/twitter/url/https/github.com/matthiasak/fusebox-closure-plugin.svg?style=social)

## Use it

```sh
yarn add fusebox-closure-plugin
```

Add to your fusebox plugin list:

```js
const closure = require('fusebox-closure-plugin').default
	, dev = process.env.NODE_ENV !== 'production'
	, truthy = x => !!x

let config = {
	plugins: [
		// ...
		dev && closure()
	].filter(truthy)
}
```

## Caught a bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Install the dependencies: `yarn`
3. Bundle the source code and watch for changes: `npm start`

## Authors

- Matthew Keas, [@matthiasak](https://twitter.com/@matthiasak). Need help / support? Create an issue or ping on Twitter.
