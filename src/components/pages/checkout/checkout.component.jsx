import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, CartItemTotal } from '../../../redux/cart/cart.selectors';
import CheckoutItem from '../../checkout-item/checkout-item.component'
import './checkout.style.scss';
<<<<<<< HEAD
import StripeCheckout from '../../stripe-button/stripe-button.component'
=======
import StripeCheckoutButton from '../../stripe-button/stripe-button.component'
>>>>>>> 26d97b1165befddfb7f2eb115e6263f906800765

const Checkout = ({ cartItems, total }) => (
   <div className='checkout-page'>
      <div className='checkout-header'>
         <div className='header-block'>
            <span >Product</span>
         </div>
         <div className='header-block'>
            <span >Description</span>
         </div><div className='header-block'>
            <span >Quantity</span>
         </div><div className='header-block'>
            <span >Price</span>
         </div><div className='header-block'>
            <span >Remove</span>
         </div>
      </div>
      {
         cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         )
         )}
      <div className='total'>
         <span>Total: $${total}</span>
         <StripeCheckoutButton price={total}/>
      </div>
   </div>

);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: CartItemTotal
});

export default connect(mapStateToProps)(Checkout);