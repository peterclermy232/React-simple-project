import React from 'react'
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <div>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                <Link to='/favorites'>All Meetups</Link>
                     </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
