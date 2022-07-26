import React from 'react'

function Backdrop(props) {
    return (
        <div className='backdrop' onClick={props.onancel} />
    )
}

export default Backdrop
