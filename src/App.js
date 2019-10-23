import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import './App.css';

function App() {
  const mainStyles = {
    textAlign: 'center'
  }
  return (
    <div className="App">
      <h1 style={mainStyles}>Crown Clothing</h1>
      <HomePage />
    </div>
  );
}

export default App;
