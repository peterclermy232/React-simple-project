import React from 'react'
import './MeetupList.css'

function MeetupList(props) {
    return (
        <ul className="list">
            {props.meetups.map(meetup => <M)}
        </ul>
    )
}

export default MeetupList