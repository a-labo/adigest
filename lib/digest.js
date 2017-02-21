/**
 * Digest
 * @function digest
 * @param {string|Object} value - Value to digest
 * @param {Object} [options={}] - Optional settings
 * @param {string} [options.algorithm='sha512'] - Hash algorithm
 * @returns {string} Digest string
 */
'use strict'

const digestString = require('./digest_string')
const digestJson = require('./digest_json')

/** @lends digest */
function digest (value, options = {}) {
  if (typeof value === 'string') {
    return digestString(value, options)
  }
  return digestJson(value, options)
}

module.exports = digest
