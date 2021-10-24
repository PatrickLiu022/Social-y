import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


function Events() {

    const url = `${process.env.REACT_APP_DB_API}/events?p=1&l=10`;
    // ?p=1&l=10
    const[events, setEvents] = useState(null);

    let content;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setEvents(res.data);
            }).catch((err) => {
                console.log(`unable to get data, ${err}`);
            });
    }, [url]);

    if (events) {
        content = events.map((obj) => {
            return (
                <div className='card'>
                    <Card body>
                        <CardTitle>
                            <h2>{obj.name}</h2>
                        </CardTitle>
                        <CardText>
                            <div>{obj.type}</div>
                            <div>
                                {obj.desc}
                                {obj.date}
                                {obj.count}
                                {obj.eventsId}
                            </div>
                        </CardText>
                        <Button>View socializers</Button>
                    </Card>
                </div>
            );
        });
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2">
                    sidebar
                </div>
                <div className="col-8">
                    {content}
                </div>
                <div className="col-2">
                    idk
                </div>
            </div>
        </div>
    )

}

export default Events;