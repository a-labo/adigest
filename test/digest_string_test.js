/**
 * Test case for digestString.
 * Runs with mocha.
 */
'use strict'

const digestString = require('../lib/digest_string.js')
const assert = require('assert')

describe('digest-string', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Digest string', async () => {
    assert.equal(digestString('hoge'), digestString('hoge'))
  })
})

/* global describe, before, after, it */
