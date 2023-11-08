import { FunctionComponent } from 'react';

interface TodoListProps {
    items: {id: number,text:string}[],
    onDeleteTodo: (todoId: number) => void
}
 
const TodoList: FunctionComponent<TodoListProps> = props => {
  
    return ( <ul>
        {props.items.map(todo=>(
            <li key={todo.id}>{todo.text}
            <button onClick={props.onDeleteTodo.bind(null,todo.id)}>Delete</button>
            </li>
        ))}
    </ul> );
}
 
export default TodoList;