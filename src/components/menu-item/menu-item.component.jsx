import React from 'react';
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
    style={{ 
        backgroundImage:`url(${imageUrl})`}} 
        className="menu-item"    
    >
            <div className="content">
                <h1 className="title">{title}</h1>
                <h1 className="title">SHOP NOW</h1>
            </div>
        </div>
);
export default MenuItem;