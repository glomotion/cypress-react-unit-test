import React from 'react'
import styles from './Button.mscss'

export class Button extends React.Component {
  handleClick () {
    console.log('button was clicked!!!!', this.props);
  }

  render () {
    return (
      <button onClick={this.handleClick} className={styles.componentButton}>
        <span>
          {this.props.name}
        </span>
      </button>
    )
  }
}
