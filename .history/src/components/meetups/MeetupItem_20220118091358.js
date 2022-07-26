import React from 'react'
import './M'

function MeetupItem(props) {
    return (
        <li className="item">
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="">
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
