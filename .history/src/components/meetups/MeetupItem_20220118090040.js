import React from 'react'

function MeetupItem(props) {
    return (
        <li>
            <div>
                <img src={props.image} alt= />
            </div>
            <div>
                <h3>TITLE</h3>
                <address>ADDRESS</address>
                <p>DESCRIPTION</p>
            </div>
            <div>
                <button>TO Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem
