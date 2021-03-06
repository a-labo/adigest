/**
 * Test case for digest.
 * Runs with mocha.
 */
'use strict'

const digest = require('../lib/digest.js')
const assert = require('assert')

describe('digest', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Digest', async () => {
    assert.equal(digest('foo'), digest('foo'))
    assert.equal(digest({ foo: 'bar' }), digest({ foo: 'bar' }))
  })
})

/* global describe, before, after, it */
