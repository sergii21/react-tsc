import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import logo from './logo.svg';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
  ]);
  const todoAddHandl = (text: string) => {
    console.log(text);
    setTodos(prevTodos => [...prevTodos, { id: Math.random(), text }])
  }
  const todoDeleteHandl = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(t=>t.id!==id))
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandl} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandl} />

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
