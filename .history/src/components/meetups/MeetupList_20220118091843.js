import React from 'react'
import './MeetupList.css'

function MeetupList(props) {
    return (
        <ul className="list">
            {props.meetups.map}
        </ul>
    )
}

export default MeetupList