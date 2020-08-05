
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage/homepage";
import ShopPage from "./Pages/shop/shop";
import Header from "./Components/header/header";
import SignInAndSignUpPage from "./Pages/sign-in&sign-up/sign-in&sign-up";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />

      </Switch>
    </div>
  );
}

export default App;
