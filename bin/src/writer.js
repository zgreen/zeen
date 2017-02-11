import help from './help'
import curPosts from '../../src/posts.json'
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const args = Object.assign(
  {},
  { draft: false },
  require('minimist')(process.argv.slice(2))
)

export default function (build = false) {
  // Bail if no title
  if (!args.title) {
    console.error(chalk.red(
      `${chalk.bold('Error')}: to create a new post, you must provide a title.`
    ))
    help()
    process.exit(1)
  }
  const slug = args.title
    .toLowerCase()
    .replace(/[^a-zA-Z\d]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
  const postedDate = new Date()

  function writeMarkdownPost() {
    fs.writeFile(
      `src/posts/${slug}.md`,
      `# ${args.title}
  <time datetime=${JSON.stringify(postedDate)}>${postedDate.getMonth() + 1}/${postedDate.getDate()}/${postedDate.getFullYear()}</time>
      `,
      (err) => {
        if (err) {
          console.log(err)
          return false
        }
        return true
      }
    )
  }

  function writePostsJSON(update, title, publish) {
    const posts = update
      ? curPosts.reduce((init, cur, idx) => {
          if (cur.slug === update) {
            cur = Object.assign({}, cur, { title })
            if (cur.isDraft && publish) {
              cur.isDraft = false
            }
          }
          init.push(cur)
          return init
        }, [])
      : curPosts.concat(
          {
            isDraft: args.draft,
            postedDate,
            slug,
            title: args.title
          }
        )
    fs.writeFile(
      `src/posts.json`,
      JSON.stringify(posts),
      (err) => {
        if (err) {
          console.log(err)
          return false
        }
        return true
      }
    )
  }
  const cases = {
    update: args.update,
    postExists: curPosts.map((post) => post.slug).indexOf(slug) !== -1,
    default: true
  }
  switch (Object.keys(cases).filter((curCase) => cases[curCase])[0]) {
    case 'update':
      writePostsJSON(args.update, args.title, args.publish)
      break
    case 'postExists':
      console.error(chalk.red(
        `${chalk.bold('Error:')} A post with that title already exists. Please choose a new title.`
      ))
      break
    default:
      function promiser(func) {
        return new Promise((resolve, reject) => {
          const writer = func()
          if (writer) {
            reject(writer)
          } else {
            resolve(writer)
          }
        })
      }
      const writePost = promiser(writeMarkdownPost)
      const logPost = promiser(writePostsJSON)
      writePost
        .then(logPost)
        .then(console.log(chalk.green(
          `Post: "${args.title}" successfully written and logged.`
        )))
      if (deploy) {
        const spawn = require('child_process').spawn
        const build = spawn('npm', ['run', 'build'])
        build.stdout.on('data', (data) => {
          console.log(data);
        })
        build.stderr.on('data', (data) => {
          console.error(data);
          process.exit(1)
        })
      }
  }
}
