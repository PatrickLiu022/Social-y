import Login from '../components/Login';
import './LoginHeader.css'
import smallDHLogo from '../img/DHLogoSmall.png';

function LoginHeader() {
    return(
        <div className='container-fluid header'>
            <div className="row d-flex justify-content-between">
                <div className="col-3">
                    <img src={smallDHLogo} alt="small Socialy logo"/>
                </div>
                <div className="col-3">
                    <p>About Us</p>
                </div>
            </div>
        </div>
    );
}

export default LoginHeader;
