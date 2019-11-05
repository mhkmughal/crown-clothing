import React from 'react';
import './App.css';
import 'firebase/auth';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { Switch, Route, Redirect } from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component';
import SignUp from './components/sign-up/sign-up.component';
import Contact from './components/contact/contact.component'
import ShopPage from './components/pages/shop/shop.component.jsx';
import { createUserProfileDocument } from './firebase/firebaseConfig';
import HomePage from './components/pages/homepage/homepage.component';
import SignInAndSignUp from './components/pages/sign-in and sign-up/sign-in and sign-up.component';
import PageNotFound from './components/pages/404/notfound';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './components/pages/checkout/checkout.component';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' render={() =>
            this.props.CurrentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUp />)
          }
          />
          <Route exact path='/sign-up' render={() =>
            this.props.CurrentUser ? (
              <Redirect to='/' />
            ) : (
                <SignUp />)
          }
          />
          <Route exact path='/contact' component={Contact} />
          <Route path='/checkout' component={Checkout} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);