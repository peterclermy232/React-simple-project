import {useState,React} from 'react'


function Todo(props) {
  const [ modalIsOpen, setM] = useState(false);
    function deleteHandler(){

    }
    
    return (
        <div className='card'>
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
    </div>
    );
}

export default Todo
