import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import {selectCartItemCount } from '../../redux/cart/cart.selector'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
        ))}
    </div>
        <CustomButton customButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = (state) =>({
    cartItems: selectCartItemCount(state)
});

export default connect(mapStateToProps)(CartDropdown);