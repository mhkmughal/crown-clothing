import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import './App.css';
import {Route} from 'react-router-dom';
import ShopPage from './components/pages/shop/shop.component'

function App() {
  const mainStyles = {
    textAlign: 'center'
  }
  return (
    <div className="App">
      <h1 style={mainStyles}>Crown Clothing</h1>
      <switch>
      <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
       </switch>
    </div>
  );
}
export default App;
