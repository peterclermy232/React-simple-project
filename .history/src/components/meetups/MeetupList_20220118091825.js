import React from 'react'
import './MeetupList.css'

function MeetupList(props) {
    return (
        <ul className="list">
            {props.M}
        </ul>
    )
}

export default MeetupList