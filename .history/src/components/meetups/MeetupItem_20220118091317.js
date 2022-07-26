import React from 'react'
import './M'

function MeetupItem(props) {
    return (
        <li className="ITEM">
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div>
                <button>TO Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem
