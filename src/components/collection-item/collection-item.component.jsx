import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">

        <div
            className='image'
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <button className="custom-buttons">ADD TO CART</button>
    </div>

);
export default CollectionItem;