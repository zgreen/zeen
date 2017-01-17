import writer from './writer'
import help from './help'
import deletePost from './deletePost'
const args = require('minimist')(process.argv.slice(2))

switch (args._[0]) {
  case 'deploy':
    writer(true)
    break
  case 'post':
    if (args.delete) {
      deletePost(args.all)
    } else {
      writer()
    }
    break
  default:
    help()
    process.exit(1)
}
