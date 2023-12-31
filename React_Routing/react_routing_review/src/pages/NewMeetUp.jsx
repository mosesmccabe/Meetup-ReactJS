import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetUP() {

    const navigate = useNavigate()

    function addMeetupHandler(meetupData) {
        fetch('https://react-to-backend-test-default-rtdb.firebaseio.com/meetup.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(() => {
            navigate('/')
        });
    }

    return (
        <div> 
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
};

export default NewMeetUP;