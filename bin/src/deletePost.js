const fs = require('fs')
const path = require('path')
const readline = require('readline')

export default function (all = false) {
  if (all) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question('Are you sure you want to delete everything? (yes/no)\n', (answer) => {
      if (answer === 'yes') {
        fs.writeFile('src/posts.json', '[]', (err) => {
          if (err) {
            console.error(`Error: ${err}`)
          }
        })
        console.log('Okay, everything will be deleted.')
      } else {
        console.log('Okay, nothing will be deleted.')
      }
      rl.close()
    })
  } else {
    process.exit(1)
  }
}
