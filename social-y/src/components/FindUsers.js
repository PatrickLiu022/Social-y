import './FindUsers.css';
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
                <Card body>
                    <CardTitle>
                        <div className='names'>
                            <img src={tempProfIcon} alt="temporary blank profile pic" className='icon'/>
                            {obj.fname} {obj.lname}
                        </div>
                    </CardTitle>
                    <CardText>
                        {'Bio: Empty for now'} <br></br>
                        {'Username: ' +  obj.username}
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
            {content}
        </div>
    )
}

export default FindUsers;