import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <h1 className="title">SHOP NOW</h1>
        </div>
    </div>
);
export default withRouter(MenuItem);