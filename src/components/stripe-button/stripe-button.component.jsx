import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe =price*100;
    const publishKey = 'pk_test_QK64yeqqEe0v9UtNCqvCIxZp00ssxPzYeW'; 

    const onToken= token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing Ltd.'
        image='https://svgshare.com/i/CUz.svg'
        shippingAddress
        billingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        currency="PKR"
        stripeKey={publishKey}
        />
    );
}
export default StripeCheckoutButton;