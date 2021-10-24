import Login from '../components/Login';
import './LoginHeader.css'

function LoginHeader() {
    return(
        <div className='container-fluid header'>
            <div className="row d-flex justify-content-between">
                <div className="col-3">
                    <h1>LOGO</h1>
                </div>
                <div className="col-3">
                    <p>About Us</p>
                </div>
            </div>
        </div>
    );
}

export default LoginHeader;
