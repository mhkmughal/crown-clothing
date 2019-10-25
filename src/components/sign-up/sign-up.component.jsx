import React, { useState } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss';

const RegisterPage = (props) => {

  const [RegisterState, setRegisterState] = useState({
    email: '',
    password: '',
    error: null,
  });

  const handleLoginChange = (e) => setRegisterState({
    ...RegisterState,
    [e.target.name]: e.target.value,
  });

  async function handleLogin(e) {
    try {
      e.preventDefault()
      const resp = await firebase.auth().createUserWithEmailAndPassword(RegisterState.email, RegisterState.password);
      if (resp)
        props.history.push('/');
    } catch (error) {
      setRegisterState({ error: error })
    }
  }
  const { error } = RegisterState;

  return (
    <div className="sign-up">
      <h1>Register</h1><br />
      <span>Sign-up using email and password</span>
      {error ? (
        <p style={{ color: 'red' }}>{error.message}</p>
      ) : null}

      <form className="form-input" onSubmit={handleLogin} >
        <FormInput
          required
          type="email"
          name="email"
          label="Email"
          value={RegisterState.email}
          onChange={handleLoginChange}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="Password"
          onChange={handleLoginChange}
          value={RegisterState.password}
        />

        <button value="Submit" className="btn btn-dark">Register</button>
      </form>
      <br />
      <h5>Already have an Account </h5><span> <Link to='/sign-in'>
        Sign-In
          </Link></span>
    </div>
  );
}
export default RegisterPage;