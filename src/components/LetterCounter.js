import React, { Component } from 'react';

class LetterCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: '',
    };
  }

  increment = () => {
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    this.setState({ str: this.state.str + randomLetter });
  };

  decrement = () => {
    this.setState({ str: this.state.str.slice(0, -1) });
  };

  render() {
    return (
      <div>
        <h1>String: "{this.state.str}"</h1>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.decrement}>Decrementar</button>
      </div>
    );
  }
}

export default LetterCounter;
