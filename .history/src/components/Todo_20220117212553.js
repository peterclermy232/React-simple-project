import React from 'react'


function Todo(props) {
    
    return (
        <div className='card'>
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn" onC>Delete</button>
    </div>
    </div>
    );
}

export default Todo