import React from 'react'

function MeetupItem(props) {
    return (
        <li>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props}</p>
            </div>
            <div>
                <button>TO Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem
