import React from 'react'
import './MeetupItem.css'

function MeetupItem(props) {
    return (
        <li className="item">
            
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className="actions">
                <button>TO Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem
