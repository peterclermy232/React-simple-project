import React from 'react'

function Backdrop(props) {
    return (
        <div className='backdrop' onCam={props.onClick} />
    )
}

export default Backdrop
