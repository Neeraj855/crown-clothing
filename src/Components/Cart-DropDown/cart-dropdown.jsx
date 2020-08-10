import React from 'react';
import { connect } from 'react-redux';
import CustomBtn from "../custom-btn/customBtn";
import './cart-dropdown.scss';
import CartItem from '../Cart-Items/CartItem';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomBtn type='submit'>Go to CheckOut</CustomBtn>

    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);