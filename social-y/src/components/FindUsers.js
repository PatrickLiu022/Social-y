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
                {/* ADD CAROSOUELDDOKL */}
                {/* Get event number to display title from json file (not created yet) */}
                <Card body>
                    <CardTitle>
                        <h2>{obj.fname}, {obj.lname}</h2>
                    </CardTitle>
                    <CardText>
                        <div>{obj.username}</div>
                        {/* div for profile description */}
                        <div>{obj.birthday}</div>
                    </CardText>
                </Card>
            </div>
            );
        });
    }

    return (
        <div>
            Find users
            {content}
        </div>
    )
}

export default FindUsers;