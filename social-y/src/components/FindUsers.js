import './css/FindUsers.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardTitle, CardText } from 'reactstrap';
import tempProfIcon from '../img/icon.png'

function FindUsers() {

    const { eventsId } = useParams();
    const url = `${process.env.REACT_APP_DB_API}/events/${eventsId}/users`;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setUsers(res.data)
            }).catch((err) => {
                console.log(`unable to get data, ${err}`);
            });
    }, [url]);
    
    let userArr = [].concat(users);

    let content;
    if (users) {
        content = userArr.map((obj) => {
            return (
            <div className='card'>
                <Card style={{backgroundColor: '#f45454', borderColor: 'black'}} body>
                    <CardTitle>
                        <img src={tempProfIcon} alt="temporary blank profile pic" className='icon'/>
                        <div className='names'>
                            {obj.fname} {obj.lname}
                        </div>
                    </CardTitle>
                    <CardText>
                        <div className="text">
                            {'Bio: ' + obj.desc} <br></br>
                            {'Username: ' +  obj.username}
                        </div>
                    </CardText>
                </Card>
            </div>
            );
        });
    }

    return (
        <div>
            <div>
                <a href="/events" className='back-btn'>{'< ' + 'Back'}</a>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default FindUsers;