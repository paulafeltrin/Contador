import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    num: 0
  };
  incremento = () => {
    if (this.state.num < 10) {
      this.setState({
        num: this.state.num + 1
      });
    }
  };
  decremento = () => {
    if (this.state.num > -10) {
      this.setState({
        num: this.state.num - 1
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.num}</h2>
        <button onClick={this.decremento}>-</button>
        <button onClick={this.incremento}>+</button>
      </div>
    );
  }
}
