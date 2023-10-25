import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context.jsx';
import MeetupList from '../components/meetup/MeetupList.jsx';

function Favorites() {
    const favoriteCtr = useContext(FavoritesContext);

    let content;

    if (favoriteCtr.totalFavorites === 0) {
        content = <p>You have no favorites yet.</p>
    } else {
        content = <MeetupList meetuplist={favoriteCtr.favorite} />
    }

    return (
        <div> 
            <h1>My Favorites</h1>
            {content}
        </div>
    );
};

export default Favorites;