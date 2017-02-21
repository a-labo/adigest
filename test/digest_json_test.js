/**
 * Test case for digestJson.
 * Runs with mocha.
 */
'use strict'

const digestJson = require('../lib/digest_json.js')
const assert = require('assert')
const co = require('co')

describe('digest-json', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Digest json', () => co(function * () {
    assert.equal(
      digestJson({ foo: 'f', bar: 'b' }),
      digestJson({ bar: 'b', foo: 'f' })
    )
  }))
})

/* global describe, before, after, it */
