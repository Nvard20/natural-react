import React, {useState} from 'react';
import Todoform from './Todoform';

function TodoList() {
    const [todos, setTodos] = useState([]);

    function AddTodo(todo){

        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo,...todos];

       setTodos(newTodos);
       
    }

    return (
        <div className='todo-list'>
            <Todoform onSubmit={AddTodo} />
            {todos !== [] ? (
                <ul className='listGroup'>
                {todos.map((list,index) => (
                    <li className={list.isCompleted ? "todo-row complete" : "todo-row"} key={index}>
                    {list.text}
                    
                    </li>
                ))}
                </ul>
             ) : null}
        </div>
    );
}

export default TodoList;
