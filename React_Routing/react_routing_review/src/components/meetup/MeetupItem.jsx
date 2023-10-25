import { useContext } from 'react';

import meetupStyle from './MeetupItem.module.css';
import Card from '../ui/Card';

import FavoritesContext from '../../store/favorites-context.jsx';

function MeetupItem(props) {
    const favoriteCtr = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtr.itemIsFavorite(props.id);

    function toggleFavoriteHandler() {
        if (itemIsFavorite){
            favoriteCtr.removeFavorite(props.id);
        } else {
            favoriteCtr.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }


    return (
        <li key={props.key} className={meetupStyle.item}>
            <Card>
            <div className={meetupStyle.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={meetupStyle.content}>
                <title>{props.title}</title>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={meetupStyle.actions}>
                <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
            </Card>
        </li>
        
    );
}

export default MeetupItem;