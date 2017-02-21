/**
 * Test case for digestString.
 * Runs with mocha.
 */
'use strict'

const digestString = require('../lib/digest_string.js')
const assert = require('assert')
const co = require('co')

describe('digest-string', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Digest string', () => co(function * () {
    assert.equal(digestString('hoge'), digestString('hoge'))
  }))
})

/* global describe, before, after, it */
