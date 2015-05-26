'use strict';
var fs = require('fs');
var join = require('path').join;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.simplePreprocess = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  overwrite: function(test) {
    var actualHtml = fs.readFileSync(join(__dirname, '../tmp/overwrite/env.html'), 'utf8');
    var expectedHtml = fs.readFileSync(join(__dirname, 'expected/env.html'), 'utf8');
    var actualJs = fs.readFileSync(join(__dirname, '../tmp/overwrite/env.js'), 'utf8');
    var expectedJs = fs.readFileSync(join(__dirname, 'expected/env.js'), 'utf8');
    var actualCss = fs.readFileSync(join(__dirname, '../tmp/overwrite/env.css'), 'utf8');
    var expectedCss = fs.readFileSync(join(__dirname, 'expected/env.css'), 'utf8');

    test.strictEqual(actualHtml, expectedHtml);
    test.strictEqual(actualJs, expectedJs);
    test.strictEqual(actualCss, expectedCss);

    test.done();
  },
  target: function(test) {
    var actualHtml = fs.readFileSync(join(__dirname, '../tmp/env.html'), 'utf8');
    var expectedHtml = fs.readFileSync(join(__dirname, 'expected/env.html'), 'utf8');
    var actualJs = fs.readFileSync(join(__dirname, '../tmp/env.js'), 'utf8');
    var expectedJs = fs.readFileSync(join(__dirname, 'expected/env.js'), 'utf8');
    var actualCss = fs.readFileSync(join(__dirname, '../tmp/env.css'), 'utf8');
    var expectedCss = fs.readFileSync(join(__dirname, 'expected/env.css'), 'utf8');

    test.strictEqual(actualHtml, expectedHtml);
    test.strictEqual(actualJs, expectedJs);
    test.strictEqual(actualCss, expectedCss);

    test.done();
  }
};
