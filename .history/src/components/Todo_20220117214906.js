import {useState,React} from 'react'
import Modal from './Modal';

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }
    
    return (
        <div className='card'>
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
    <Modal />
    <B
    </div>
    );
}

export default Todo
