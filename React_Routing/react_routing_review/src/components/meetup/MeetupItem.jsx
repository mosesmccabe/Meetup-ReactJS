import meetupStyle from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
    return (
        <li key={props.key} className={meetupStyle.item}>
            <Card>
            <div className={meetupStyle.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={meetupStyle.content}>
                <title>{props.title}</title>
                <address>{props.address}</address>
                <p>{props.disc}</p>
            </div>
            <div className={meetupStyle.actions}>
                <button>Add To Favorites</button>
            </div>
            </Card>
        </li>
        
    );
}

export default MeetupItem;