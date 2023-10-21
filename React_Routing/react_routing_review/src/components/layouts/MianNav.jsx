import {Link} from 'react-router-dom';

import navStyle from './MainNav.module.css'

function MainNav(){
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