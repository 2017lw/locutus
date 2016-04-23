XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var i18n_loc_get_default = require('/Users/kvz/code/phpjs/src/php/i18n/i18n_loc_get_default.js')

describe('php', function () {
  describe('i18n.i18n_loc_get_default.js', function () {
    it('should pass test 1', function (done) {
      i18n_loc_set_default('pt_PT');
      i18n_loc_get_default();
      expected = 'pt_PT'
i18n_loc_set_default('pt_PT');
      result = i18n_loc_get_default();
      expect(result).to.equal(expected)
      done()
    })
  })
})