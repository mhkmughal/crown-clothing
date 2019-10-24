import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component'
import SignInAndSignUp from './components/pages/sign-in and sign-up/sign-in and sign-up.component';
import SignUp from './components/sign-up/sign-up.component'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/sign-in' component={SignInAndSignUp} />
      <Route exact path='/sign-up' component={SignUp} />

       </Switch>
    </div>
  );
}
export default App;
