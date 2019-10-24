import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/Images/crown.svg';
import './header.style.scss'
import 'firebase/auth';
import * as firebase from 'firebase';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
        </Link>

            <Link className="option" to='/contact'>
                CONTACT
        </Link>

            {
                currentUser ?
                    <div style={{cursor:'pointer',color:'blue',textDecoration:'underline'}} className="option" onClick={() => firebase.auth().signOut()}><span>SIGN-OUT</span></div>
                    :
                    <Link className="option" to='/sign-in'>SIGN-IN</Link>
            }

        </div>
    </div>
);
export default Header;
