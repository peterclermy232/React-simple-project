import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            {props.ch}
        </div>
    )
}

export default Card