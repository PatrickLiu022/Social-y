import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoginPage from '../img/LoginPage.png';
import './css/Login.css';

function Login() {

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-12">
                    <p className='beta-message'>
                        Beta version, please
                        <a href="/events" className='nav-to-events'> click here </a> to go to home page
                    </p>
                </div>
                    <img src={LoginPage} alt="login form"/>
            </div>
        </div>
    )
}

export default Login;