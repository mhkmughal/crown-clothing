import React from 'react';
import { connect } from 'react-redux';

import './collection-item.style.scss';
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">

            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <button
                onClick={() => addItem(item)}
                className="custom-buttons">
                ADD TO CART
        </button>
        </div>
    )
}

const mapDispatchToPops = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToPops
)(CollectionItem);