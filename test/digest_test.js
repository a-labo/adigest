/**
 * Test case for digest.
 * Runs with mocha.
 */
'use strict'

const digest = require('../lib/digest.js')
const assert = require('assert')
const co = require('co')

describe('digest', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Digest', () => co(function * () {
    assert.equal(digest('foo'), digest('foo'))
    assert.equal(digest({ foo: 'bar' }), digest({ foo: 'bar' }))
  }))
})

/* global describe, before, after, it */
