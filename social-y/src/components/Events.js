import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './Events.css';
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
                                    {obj.type}
                                </h3>
                                <div>
                                    {obj.desc}
                                    {obj.date}
                                    {obj.count}
                                    {obj.eventsId}
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
                <div className="col-2">
                    <Navigation
            // you can use your own router's api to get pathname
            activeItemId=""
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Filters',
                itemId: '/filters',
                // elemBefore: () => <Icon name="users" />,
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
                <div className="col-8">
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