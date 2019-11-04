import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../../Assets/Images/oops.png';

const NotFound = () => (
    <div>
        <center><img alt="error-img" src={PageNotFound} style={{ width: '50%', flaot: 'right', opacity: '0.3', marginTop: '-130px' }} /></center>
        <center><h2>Access Denied/Forbidden.</h2></center>
        <center style={{ marginTop: '50px', cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}><h5><Link to="/">Return to Home Page</Link></h5></center>
    </div>
);
export default NotFound;