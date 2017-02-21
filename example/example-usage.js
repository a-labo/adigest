'use strict'

const adigest = require('adigest')

{
  let digest01 = adigest('some-string-to-digest')
  let digest02 = adigest({ title: 'some-object-to-digest' })

  /* ... */
}
