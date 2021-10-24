import testMessage from '../img/MessageInterface.png';
import './testMessagePage.css';

function testMessageApp() {
    return (
        <img src={testMessage} alt="test message interface" className='test-msg'/>
    );
}

export default testMessageApp;