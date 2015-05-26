# grunt-simple-preprocess [![Build Status](https://travis-ci.org/stevemao/grunt-simple-preprocess.svg?branch=master)](https://travis-ci.org/stevemao/grunt-simple-preprocess)

> Preprocess html, js and css based off environment configuration, using [`simple-preprocess`](https://github.com/stevemao/simple-preprocess)

*Issues with the output should be reported on the `simple-preprocess` [issue tracker](https://github.com/stevemao/simple-preprocess/issues).*


## Install

```
$ npm install --save-dev grunt-simple-preprocess
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  simplePreprocess: {
    target: {
      env: 'prod',
      src: 'src/index.html',
      dest: 'dest/index.html'
    }
  }
});

grunt.registerTask('default', ['simplePreprocess']);
```

**NOTE** If the file `dest` is *NOT* specified, `src` is overwritten. Also only one `src` per `dest` is supported. The first file is used if multiple `src` per `dest` is found. See http://gruntjs.com/configuring-tasks#files for more information on `files`


## License

MIT © [Steve Mao](https://github.com/stevemao)
