import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleRupeeChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { rupees } = this.state;
    const conversionRate = 1 / 85; // Example rate: 1 EUR = 85 INR
    const euroValue = (rupees * conversionRate).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees:
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleRupeeChange}
            />
          </label>
          <br />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && <h3>Euro: €{this.state.euro}</h3>}
      </div>
    );
  }
}

export default CurrencyConvertor;