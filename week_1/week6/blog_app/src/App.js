import React from 'react';
import './App.css';
import Posts from './Posts'; // Assuming Posts.js is in the src folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Other content from App.js */}
        <Posts />
      </header>
    </div>
  );
}
export default App;