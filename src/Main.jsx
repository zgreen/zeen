import '!!css!postcss!./core.css'
import React from 'react'
import styles from './core.css.json'

class Main extends React.Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperInner}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.object
}

export default Main
