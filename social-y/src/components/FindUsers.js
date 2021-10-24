import './FindUsers.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

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
                        <div>Something</div>
                        {obj.fname}
                    </CardTitle>
                    <CardText>
                        {'Name: ' + obj.fname + ' '}{obj.lname + '      '}
                        {/* div for profile description */}
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