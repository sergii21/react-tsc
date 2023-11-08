import { FunctionComponent } from 'react';

interface TodoListProps {
    items: {id: number,text:string}[]
}
 
const TodoList: FunctionComponent<TodoListProps> = props => {
  
    return ( <ul>
        {props.items.map(todo=>(
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul> );
}
 
export default TodoList;