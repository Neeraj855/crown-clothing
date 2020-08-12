import React from 'react';
import { connect } from 'react-redux';
import CustomBtn from "../custom-btn/customBtn";
import './cart-dropdown.scss';
import CartItem from '../Cart-Items/CartItem';
import { selectCartItems } from '../../Redux/Cart/cartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/Cart/cartAction';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                ) : (
                        <span className='empty-message'>Your Cart is empty</span>)
            }
        </div>
        <CustomBtn onClick={() => {

            history.push('/checkout');
            dispatch(toggleCartHidden());
        
        }}
        type='submit'
        >
        Go to CheckOut
        </CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,

});


export default withRouter(connect(mapStateToProps)(CartDropdown));