import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './css/Events.css';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


function Events() {

    const url = `${process.env.REACT_APP_DB_API}/events?p=1&l=5`;
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
            let link = `/events/${obj.eventsId}/users`;
            link = link.toString();
            return (
                <div className='cards'> 
                    <Card style={{backgroundColor: '#f45454'}} body>
                        <CardTitle>
                            <h2 className='card-title'>{obj.name}</h2>
                        </CardTitle>
                        <CardText>
                            <div className='card-content'>
                                <h3>
                                    Event Type: {obj.type}
                                </h3>
                                <div>
                                    <div className='overview'>
                                        <p>Overview</p>
                                        {obj.desc}
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <p>Event Date: {obj.date}</p>  
                                            </li>
                                            <li>
                                                <p>People Count: {obj.count}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardText>
                        <a href={link} className='redirect'>
                            <button className='event-button'>View Attendees</button>
                        </a>
                    </Card>
                </div>
            );
        });
    }



    return (
        <div className='container-fluid event-page'>
            <div className="row">
                <div className="col-3">
                    <Navigation
                        activeItemId=""
                        onSelect={({itemId}) => {
                        }}
                        items={[
                        {
                            title: 'Dashboard',
                            itemId: '/dashboard',
                        },
                        {
                            title: 'Filters',
                            itemId: '/filters',
                            subNav: [
                            {
                                title: 'People',
                                itemId: '/filters/people',
                            },
                            {
                                title: 'Event Type',
                                itemId: '/filters/eventType',
                            },
                            {
                                title: 'Time',
                                itemId: '/filters'
                            }
                            ],
                        },
                        ]}
                    />
                </div>
                <div className="col-7">
                    <div >
                        {content}
                    </div>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    )

}

export default Events;