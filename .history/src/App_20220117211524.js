
*{
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  margin: 3rem;
  background-color: #dfdfdf;
}

h1,h2{
  color: #333333;
}
.btn{
  font: inherit;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  background-color: #800040;
  color: white;
  border: 1px solid #800040;
  margin: 0 1rem;
}

.btn:hover{
  background-color: #9c1458;
  border-color: #9c1458;
}
.btn--alt{
  background-color: transparent;
  color: #800040;
}
.btn--:hover{
  background-color: #f8dae9;
}
.card{
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  padding: 1rem;
  width: 20rem;
}
.actions{
  text-align: right;
}
.modal{
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  text-align: center;
  width: 30rem;
  z-index: 10;
  position: fixed;
  top: 20vh;
  left: calc(50% - 15rem);
}
.backdrop{
  position: fixed;
  z-index: 1;
  background-color: rgba(0,0,0,0.75);
  width: 100%;
}
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo />
    </div>
  );
}

export default App;
