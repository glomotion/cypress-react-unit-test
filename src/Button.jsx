import React from 'react';
import { HelloWorld } from './hello-world.jsx';
// import { logger } from './tools.js';

export default class Button extends React.Component {
  constructor (...args) {
    super(...args)

    this.state = {
      greeting: 'Hello',
    }
  }

  render () {
    return (
      <div>
        <HelloWorld />
        <p>{this.state.greeting} World</p>
        <button onClick={() => this.updateGreeting()}>Update greeting</button>
      </div>
    )
  }

  updateGreeting () {
    this.setState({
      greeting: 'Bonjour',
    });
  }
}
