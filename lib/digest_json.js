/**
 * Digest json
 * @function digestJson
 * @param {Object} value - Object value to digest
 * @param {Object} [options={}] - Optional settings
 * @returns {string} Digest string
 */
'use strict'

const digestString = require('./digest_string')
const dict = require('json-pointer')

/** @lends digestJson */
function digestJson (value, options = {}) {
  let normalized = digestJson.normalizeValue(value)
  return digestString(JSON.stringify(normalized), options)
}

Object.assign(digestJson, {
  normalizeValue (value) {
    if (value.toJSON) {
      value = value.toJSON()
    }
    let valueAsDict = dict(value)
    return Object.keys(valueAsDict)
      .sort()
      .reduce((normalized, pointer) =>
        Object.assign(normalized, {
          [pointer]: valueAsDict[ pointer ]
        }), {})
  }
})

module.exports = digestJson
