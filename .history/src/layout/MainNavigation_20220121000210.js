import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import FavoritesContext from '../store/favorites-context';
import  './MainNavigation.css';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className='header'>
            <div className='logo'>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                <Link to='/favorites'>
                    My Favorites
                    <span>{}</span>
                    </Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
