const chalk = require('chalk')

export default function () {
  console.log(chalk.yellow(`
${chalk.bold('# zeen Help')}

post                     Create a new post
build                    Create a new post and run a build
--delete={TITLE}         Delete a post of {SLUG}
--title={TITLE}          Create a new post of {TITLE}
--is-draft               Create a draft post
--publish                Publish a previously drafted post
`))
}
