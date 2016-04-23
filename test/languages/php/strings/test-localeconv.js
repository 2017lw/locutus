XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var localeconv = require('/Users/kvz/code/phpjs/src/php/strings/localeconv.js')

describe('php', function () {
  describe('strings.localeconv.js', function () {
    it('should pass test 1', function (done) {
      setlocale('LC_ALL', 'en_US');
      localeconv();
      expected = {decimal_point: '.', thousands_sep: '', positive_sign: '', negative_sign: '-', int_frac_digits: 2, frac_digits: 2, p_cs_precedes: 1, p_sep_by_space: 0, n_cs_precedes: 1, n_sep_by_space: 0, p_sign_posn: 1, n_sign_posn: 1, grouping: [], int_curr_symbol: 'USD ', currency_symbol: '$', mon_decimal_point: '.', mon_thousands_sep: ',', mon_grouping: [3, 3]}
setlocale('LC_ALL', 'en_US');
      result = localeconv();
      expect(result).to.equal(expected)
      done()
    })
  })
})