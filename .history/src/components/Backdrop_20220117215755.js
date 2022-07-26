import React from 'react'

function Backdrop(props) {
    return (
        <div className='backdrop' onCl={props.onClick} />
    )
}

export default Backdrop
