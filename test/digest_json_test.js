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

  before(async () => {

  })

  after(async () => {

  })

  it('Digest json', async () => {
    assert.equal(
      digestJson({foo: 'f', bar: 'b'}),
      digestJson({bar: 'b', foo: 'f'})
    )

    assert.notEqual(
      digestJson({foo: 'f', bar: 'b'}),
      digestJson({foo: 'f', bar: 'baz'})
    )
  })
})

/* global describe, before, after, it */
