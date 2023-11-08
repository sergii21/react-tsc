import React, { FunctionComponent, useRef } from "react";

interface NewTodoProps {
    
}
 
const NewTodo: FunctionComponent<NewTodoProps> = () => {
    const textInpRef = useRef<HTMLInputElement>(null);
   const todoSubmHandl = (event:React.FormEvent)=>{
    event.preventDefault();
    const enteredText = textInpRef.current?.value;
   };
   return ( <form onSubmit={todoSubmHandl}>
        <div>
            <label>Todo text</label>
            <input type="text" ref={textInpRef}/>
        </div>
        <button type="submit">ADD TODO</button>
    </form> );
}
 
export default NewTodo;