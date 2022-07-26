import React from 'react'

function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){}
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal
