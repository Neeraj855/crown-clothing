
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from "./Pages/HomePage/homepage";
import ShopPage from "./Pages/shop/shop";
import Header from "./Components/header/header";
import SignInAndSignUpPage from "./Pages/sign-in&sign-up/sign-in&sign-up";
import CheckOutPage from './Pages/checkOut/checkout';

import { auth, createUserProfileDocument } from './firebase/firebase-Utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/userActions';
import { selectCurrentUser } from './Redux/User/userSelector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })


      } else {
        setCurrentUser(userAuth /* Null */);
      }


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />

        </Switch>
      </div>
    );

  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
