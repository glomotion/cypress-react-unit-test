import React from 'react';
import { NestedChild } from './NestedChild.jsx';
// import { logger } from './tools.js';

import styles from './Button.mscss';

export default class Button extends React.Component {
  constructor (...args) {
    super(...args)

    this.state = {
      greeting: 'Hello',
    }
  }

  render () {
    return (
      <div className={styles.componentButton}>
        <p>{this.state.greeting} World</p>
        <button onClick={() => this.updateGreeting()}>Update greeting</button>
        <NestedChild />
      </div>
    )
  }

  updateGreeting () {
    this.setState({
      greeting: 'Bonjour',
    });
  }
}
