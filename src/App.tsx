import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import logo from './logo.svg';

function App() {
  const todos = [
    { id: 1, text: 'jhhj' },
    { id: 2, text: 'jhhj1' },
  ]
  return (
    <div className="App">
      <NewTodo/>
      <TodoList items={todos}/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
