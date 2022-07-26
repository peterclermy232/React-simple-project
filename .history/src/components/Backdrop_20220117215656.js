import React from 'react'

function Backdrop(props) {
    return (
        <div className='backdrop' onCancel={props.onClick} />
    )
}

export default Backdrop
