import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SocialyLogo from '../img/DHLogo500.png'
import Skyline from '../img/citySkyline.png';
import './Login.css';

function Login() {

    return (
        <div>
            <div className="row justify-content-around">
                <div className='logo col-6 col-lg-9' style={{backgroundImage: `url(${Skyline})`}}>
                    <img src={SocialyLogo} alt='socialyLogo' className='socialy'/>
                </div>
                <div className="login-form col-6 col-lg-3">
                    <div className='row justify-content-center login-header'>
                        <div className='col-5'>
                            <h1 className='log-in'>Log-in</h1>
                        </div>
                    </div>
                    <form className='form'>
                        <div className="row">
                            <div className="col-12 text-col">
                                <div className='text-field'>
                                    <label htmlFor='username'></label>
                                    <input type='text' name='username' placeholder='Username' required/>
                                </div>
                            </div>
                            <div className="col-12 text-col">
                                <div className='text-field'>
                                    <label htmlFor='password'></label>
                                    <input type='password' name='password' placeholder='Password' required/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="pass">Forgot Password?</div>
                            </div>
                            <input className='login-button' type='submit' value='Login' />
                            <div className="signup-link">
                                Not a member? <a href='#'>Sign up</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-10">
                    <img src={Skyline} alt="city skyline" className='skyline'/>
                </div>
            </div>
        </div>
    )
}
// function Signup() {
//     return (
//         <div>
//             <Card>

//             </Card>
//             <div className="w-100 text-center mt-2">
//                 Already have an account? Log In.
//             </div>
//         </div>
//     )
// }

export default Login;