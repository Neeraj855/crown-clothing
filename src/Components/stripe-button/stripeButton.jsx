import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = "pk_test_51HIVb3D5JvcjpwxKrLONTxTDdDgvHw2Yuwv9fwQc6FYpA3YYgZRwgpZm5PODWM7YkwClvD1wSOZCBHDKuxW1iSGh00rEYlhicO";

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
return(
    <StripeCheckout 
    
    label = 'Pay Now'
    name = 'Crwn Clothing Ltd'
    billingAddress
    image = 'https://sendeyo.com/up/d/f3eb2117da'
    description = {`Your total is : $${price}`}
    amount = {stripePrice}
    panelLabel = 'Pay Now'
    token ={onToken}
    stripeKey = {publishableKey}
    />
)

};

export default StripeCheckoutButton;