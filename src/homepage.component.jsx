import React from 'react';
import './Homepage.style.scss'
import Background from './Assets/Images/hats.png'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <img className="imag" src={Background} alt="Logo" />
                    <h1 className="title">HATS</h1>
                    <h1 className="title">SHOP NOW</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <h1 className="title">SHOP NOW</h1>
                </div>
            </div> <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <h1 className="title">SHOP NOW</h1>
                </div>
            </div> <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMENS</h1>
                    <h1 className="title">SHOP NOW</h1>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MENS</h1>
                    <h1 className="title">SHOP NOW</h1>
                </div>
            </div>
        </div>
    </div>
); 
export default HomePage;
