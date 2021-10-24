import './FindUsers.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FindUsers() {

    const { eventsId } = useParams();
    const url = `${process.env.REACT_APP_DB_API}/events/${eventsId}/users/${eventsId}`;
    // ?p=1&l=10
    // const[events, setEvents] = useState(null);
    fetch('https://6174c06c08834f0017c709f4.mockapi.io/events/1')
        .then(res => console.log(res));
    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             console.log(res.data);
    //         }).catch((err) => {
    //             console.log(`unable to get data, ${err}`);
    //         });
    // }, [url]);

    return (
        <div>
            Find users
        </div>
    )
}

export default FindUsers;