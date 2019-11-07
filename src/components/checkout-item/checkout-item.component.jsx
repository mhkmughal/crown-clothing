import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.style.scss';
import { removeCartItem, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='checkout' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'><i onClick={() => removeItem(cartItem)} className="fa fa-minus" aria-hidden="true"></i>{quantity}<i onClick={() => addItem(cartItem)} className="fa fa-plus" aria-hidden="true"></i></span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}><i className="fa fa-trash" aria-hidden="true"></i></div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);