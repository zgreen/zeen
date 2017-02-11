export default function () {
  const spawn = require('child_process').spawn
  const build = spawn('npm', ['run', 'build'])
  build.stdout.on('data', (data) => {
    console.log(data)
  })
  build.stderr.on('data', (data) => {
    console.error(data)
    process.exit(1)
  })
}
