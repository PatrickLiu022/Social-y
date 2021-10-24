import './LoginHeader.css'
import Simg from '../img/DHMobileIcon.png';
import Home from '../img/HomeButton.png';
import Messages from '../img/Messages.png';
import Notifications from '../img/Notifications.png';

function LoginHeader() {
    return(
        <div className='container-fluid header'>
            <div className="row d-flex justify-content-between">
                <div className="col-1">
                    <a href="/events">
                        <img src={Simg} alt="small Socialy logo" className='small-logo'/>
                    </a>
                    <a href="/login" className='beta'>Log out </a>
                </div>
                <div className="col-6 col-md-4 col-lg-2 ">
                    <a href="/events">
                        <img src={Home} alt="navigate to home page" className='img'/>
                        <img src={Messages} alt="check messages" className='img'/>
                        <img src={Notifications} alt="check Notifications" className='img'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginHeader;
