#!/usr/bin/env node

/**
 * Make zeen executable.
 */
const fs = require('fs')
fs.readFile('./bin/index.js', (err, data) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  fs.writeFile(
    './bin/index.js',
`#!/usr/bin/env node
${data.toString()}
`,
    (err) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
    }
  )
})
