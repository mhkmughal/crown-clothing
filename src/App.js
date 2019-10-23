import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  const mainStyles = {
    textAlign: 'center'
  }
  return (
    <div className="App">
      <h1 style={mainStyles}>Crown Clothing</h1>
      <switch>
      <Route exact path='/' component={HomePage} />
{/*       <Route exact path='/hats' component={Hats Page} />
 */}      </switch>
    </div>
  );
}
export default App;
