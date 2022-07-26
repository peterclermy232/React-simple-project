
import './index.css';
import Todo from './components/Todo';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Modal /
    </div>
  );
}

export default App;
