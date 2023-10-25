import React, { useEffect, useState } from 'react';

import MeetupList from "../components/meetup/MeetupList";


function AllMeetUp(){

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://react-to-backend-test-default-rtdb.firebaseio.com/meetup.json') // by default fetch is a get request
      .then((response) => response.json())
      .then((data) => {
        const allmeetup = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }

          allmeetup.push(meetup)
        }
        setData(allmeetup)})
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
    
    return(
        <div>
            <h1>All Meetup</h1>
            <MeetupList meetuplist={data} />
        </div>
     );
};

export default AllMeetUp;