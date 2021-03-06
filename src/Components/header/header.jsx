import React from "react";
import { createStructuredSelector } from 'reselect'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";
import { auth } from '../../firebase/firebase-Utils';
import { connect } from 'react-redux';
import CartIcon from '../../Components/Cart-Icon/cart-icon';
import CartDropdown from '../../Components/Cart-DropDown/cart-dropdown';
import { selectCartHidden } from '../../Redux/Cart/cartSelector';
import { selectCurrentUser } from '../../Redux/User/userSelector';



const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOPS
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser
          ?
          (<div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>)
          :
          (<Link className='option' to='/signin'>SIGN IN</Link>)
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);