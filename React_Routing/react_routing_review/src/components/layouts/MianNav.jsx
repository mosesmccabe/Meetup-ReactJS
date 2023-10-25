import {Link} from 'react-router-dom';
import { useContext } from 'react';

import FavoritesContext from '../../store/favorites-context.jsx';
import navStyle from './MainNav.module.css'

function MainNav(){
    const favoriteCtr = useContext(FavoritesContext);

    return(
        <header className={navStyle.header}>
            <div className={navStyle.logo}>React Meetup</div>
            <nav>
                <ul >
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                        <span className={navStyle.badge}>{favoriteCtr.totalFavorites}</span>
                    </li>
                    <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;