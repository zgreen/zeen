import React from 'react'
import styles from './core.css.json'
import config from './config'
import posts from './posts.json'
import { Link } from 'react-router'
const homepage = { __html: require('./homepage.md') }

const latestPostObj = posts
  .filter((post) => !post.isDraft)
  .sort((a, b) => {
    return new Date(b.postedDate) - new Date(a.postedDate)
  })[0]

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>{config.siteName}</h1>
        <div dangerouslySetInnerHTML={homepage} />
        <h2 className={styles.homePostTitleWrapper}><span style={{ fontWeight: '400' }}>Latest post</span>: <Link
          to={latestPostObj.slug}
          className={styles.homePostTitle}
          >"{latestPostObj.title}"</Link>
        </h2>
      </div>
    )
  }
}

export default Main
