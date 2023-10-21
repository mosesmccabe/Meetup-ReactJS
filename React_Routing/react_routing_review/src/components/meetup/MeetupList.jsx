import MeetupItem from "./MeetupItem";
import itemStyle from "./MeetupList.module.css";

function MeetupList(props) {
    return (
        <ul className={itemStyle.list}>
            {props.meetuplist.map((item) => 
                <MeetupItem 
                    key={item.id}
                    id ={item.id}
                    image={item.image}
                    title={item.title}
                    address={item.address}
                    disc={item.description}
                 />
            )}
        </ul>
    );
}

export default MeetupList;