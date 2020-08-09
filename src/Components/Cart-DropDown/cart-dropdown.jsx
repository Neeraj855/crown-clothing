import React from 'react';
import CustomBtn from "../custom-btn/customBtn";
import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomBtn type='submit'>Go to CheckOut</CustomBtn>

    </div>
);

export default CartDropdown;