import React from 'react'
import 'firebase/auth';
import './header.style.scss'
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/Images/crown.svg';
import CartItem from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
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
                    <div style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} className="option" onClick={() => firebase.auth().signOut()}><span>SIGN-OUT</span></div>
                    :
                    <Link className="option" to='/sign-in'>Sign-In/Register</Link>
            }

            <CartItem />

        </div>

        {
            hidden ? null : <CartDropdown />
        }

    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);