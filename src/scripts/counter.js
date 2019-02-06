import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
    };
  }
  render() {
    return (
      <div onClick={() => this.setState({ currentValue: this.state.currentValue + 1})}>
        {this.state.currentValue}
      </div>
    )
  }
}
