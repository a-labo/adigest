/**
 * Digest json
 * @function digestString
 * @param {string} value - String value to digest
 * @param {Object} [options={}] - Optional settings
 * @param {string} [options.algorithm='sha512'] - Hash algorithm
 * @returns {string} Digest string
 */
'use strict'

const crypto = require('crypto')

/** @lends digestString */
function digestString (value, options = {}) {
  const {algorithm = 'sha512'} = options
  return crypto
    .createHash(algorithm)
    .update(String(value))
    .digest('hex')
}

module.exports = digestString
