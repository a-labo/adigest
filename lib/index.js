/**
 * Generate digest
 * @module adigest
 * @version 3.0.0
 */

'use strict'

const digestString = require('./digest_string')
const digestJson = require('./digest_json')
const digest = require('./digest')

const lib = digest.bind(this)

Object.assign(lib, {
  digestString,
  digestJson,
  digest
})

module.exports = lib
