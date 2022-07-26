import React from 'react'
import MeetupItem from './MeetupItem'
import './MeetupList.css'

function MeetupList(props) {
    return (
        <ul className="list">
            {props.meetups.map(meetup => <MeetupItem key={meetup.id} id={me} />)}
        </ul>
    )
}

export default MeetupList