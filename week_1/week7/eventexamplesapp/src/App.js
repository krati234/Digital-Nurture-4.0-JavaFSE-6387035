import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementValue = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementValue = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello = () => {
    console.log("Hello, this is a static message.");
  };

  handleIncreaseClick = () => {
    this.incrementValue();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };
  
  handleSyntheticEvent = (event) => {
    console.log("I was clicked");
    console.log(event); // Demonstrates the synthetic event
  };

  render() {
    return (
      <div className="App">
        <h1>Event Handling Examples</h1>

        <div>
          <h2>Counter: {this.state.counter}</h2>
          <button onClick={this.incrementValue}>Increment</button>
          <button onClick={this.decrementValue}>Decrement</button>
        </div>

        <hr />

        <div>
          <h2>Multiple Methods</h2>
          <button onClick={this.handleIncreaseClick}>Increase</button>
        </div>
        
        <hr />
        
        <div>
          <h2>Passing Arguments</h2>
          <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>
        </div>
        
        <hr />
        
        <div>
          <h2>Synthetic Event</h2>
          <button onClick={this.handleSyntheticEvent}>OnPress Button</button>
        </div>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;