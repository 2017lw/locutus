XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var xdiff_string_patch = require('/Users/kvz/code/phpjs/src/php/xdiff/xdiff_string_patch.js')

describe('php', function () {
  describe('xdiff.xdiff_string_patch.js', function () {
    it('should pass test 1', function (done) {
      xdiff_string_patch('', '@@ -0,0 +1,1 @@\n+Hello world!');
      expected = 'Hello world!'
      result = xdiff_string_patch('', '@@ -0,0 +1,1 @@\n+Hello world!');
      expect(result).to.equal(expected)
      done()
    })
  })
})