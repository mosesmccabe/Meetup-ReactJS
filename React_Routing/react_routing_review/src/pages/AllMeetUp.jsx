import MeetupList from "../components/meetup/MeetupList";
import DummyData from "../components/data/DummyData"

function AllMeetUp(){
    
    return(
        <div>
            <h1>All Meetup</h1>
            <MeetupList meetuplist={DummyData} />
        </div>
     );
};

export default AllMeetUp;