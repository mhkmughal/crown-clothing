import React from 'react';
import './cart-dropdown.style.scss';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) :
                <span className="empty-message">Your cart is empty</span>

            }
        </div>
        {
            cartItems.length ?
           <Link to='/checkout'><CustomButton customButton>GO TO CHECKOUT</CustomButton></Link> : ''
        }
        
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);