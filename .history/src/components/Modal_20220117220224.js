import React from 'react'

function Modal() {
    function cancelHandler(){}

    function confirmHandler(){}
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={co}>Confirm</button>
        </div>
    );
}

export default Modal
