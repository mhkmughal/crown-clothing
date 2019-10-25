import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/shop.component.jsx';
import Header from './components/header/header.component'
import SignInAndSignUp from './components/pages/sign-in and sign-up/sign-in and sign-up.component';
import SignUp from './components/sign-up/sign-up.component';
import 'firebase/auth';
import * as firebase from 'firebase';
import { createUserProfileDocument } from './firebaseConfig';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

   componentDidMount () {
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
            id:snapshot.id,
            ...snapshot.data()
            }
          });
        });
      }
        this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignUp} />
          <Route exact path='/sign-up' component={SignUp} />

        </Switch>
      </div>
    )
  }
}
export default App;
