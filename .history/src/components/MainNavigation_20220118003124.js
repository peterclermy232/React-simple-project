import React from 'react'
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <div>React meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link>All Meet</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
