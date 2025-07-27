import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculateScore from './Components/CalculateScore';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CalculateScore name="John" school="St. Joseph" total={450} goal={500} />
        <CalculateScore name="Alice" school="St. Mary" total={490} goal={500} />
      </header>
    </div>
  );
}
export default App;