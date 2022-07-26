import React from 'react'
import './MeetupList.css'

function MeetupList(props) {
    return (
        <ul className="list">
            {props.mee}
        </ul>
    )
}

export default MeetupList