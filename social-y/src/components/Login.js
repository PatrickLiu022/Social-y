import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Form, Button, Card } from 'react-bootstrap';
import 'firebase/auth';
import './Login.css';

function Login() {
    const auth = app.auth();

    return (
        <div className="login">

        </div>
    )
}

function Signup() {
    return (
        <div>
            <Card>
                
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In.
            </div>
        </div>
    )
}

export default Login;