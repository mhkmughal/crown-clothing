import React, { useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from '../form-input/form-input.component'
import { Link } from 'react-router-dom';
import './sign-in.style.scss'

const SignIn = (props) => {

    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
        error: null,
    });

    //Handles the input form data. 
    const handleLoginChange = (e) => setLoginState({
        ...loginState,
        [e.target.name]: e.target.value,
    });

    //Handles the login form data. 
    async function handleLogin(e) {
        try {
            e.preventDefault()
            const resp = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            if (resp)
                return firebase.auth().signInWithEmailAndPassword(loginState.email, loginState.password);
        } catch (error) {
            setLoginState({ error: error })
        }
    }

    const { error } = loginState;
    return (
        <div className="sign-in">
            <h2>Already have an account?</h2>
            <span>Sign-in using email and password</span>

            {error ? (
                <p style={{ color: 'red', textAlign: 'center' }}>{error.message}</p>
            ) : null}
            <form className="form-input" onSubmit={handleLogin} >
                <FormInput
                    required
                    type="email"
                    name="email"
                    label="Email"
                    value={loginState.email}
                    onChange={handleLoginChange}
                />
                <FormInput
                    required
                    type="password"
                    name="password"
                    label='Password'
                    autoComplete="password"
                    onChange={handleLoginChange}
                    value={loginState.password}
                />
                <button value="Submit" className="btn btn-dark">Sign-in</button>
            </form>
            <br />
            <h5>Don't have an Account? </h5><span> <Link to='/sign-up'>
                Register Now
            </Link></span>

        </div>
    );
}
export default SignIn;