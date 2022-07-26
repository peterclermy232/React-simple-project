import React from 'react'
import MeetupItem from './MeetupItem'
import './MeetupList.css'

function MeetupList(props) {
    return (
        <ul className="list">
            {props.meetups.map(meetup =>
             <MeetupItem 
             key={meetup.id} 
             id={meetup.id} 
            image={meetup.image}
             />)}
        </ul>
    )
}

export default MeetupList