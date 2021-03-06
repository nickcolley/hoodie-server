var _ = require('lodash')
var expect = require('expect.js')

var utils = require('../../lib/utils')

require('tap').mochaGlobals()
describe('utils', function () {
  it('should expose n number of properties', function () {
    expect(_.size(utils)).to.eql(5)
  })

  it('should have a generatePassword property', function () {
    expect(utils).to.have.property('generatePassword')
  })

  it('should have a ensureDir property', function () {
    expect(utils).to.have.property('ensureDir')
  })

  it('should have a ensurePaths property', function () {
    expect(utils).to.have.property('ensurePaths')
  })

  it('should have a processSend property', function () {
    expect(utils).to.have.property('processSend')
  })

  it('should have a showConfigPath property', function () {
    expect(utils).to.have.property('showConfigPath')
  })
})
