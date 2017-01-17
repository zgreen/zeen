const chalk = require('chalk')

export default function () {
  console.log(chalk.yellow(`
${chalk.bold('# zeen Help')}

--title={TITLE}          Create a new post of {TITLE}
--is-draft               Create a draft post
--publish                Publish a previously drafted post
`))
}
