import React, {useState,useEffect} from 'react';
import Todoform from './Todoform';
import {FaWindowClose} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {IoIosAddCircleOutline} from 'react-icons/io';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState('');

    function AddTodo(todo){

        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo,...todos];

       setTodos(newTodos);
    
    }

    function handleRemove(id) {
     
        const newList = todos.filter((list) => list.id !== id);
 
        setTodos(newList);
      }
    
      function submitEdits(id) {
        const updatedTodos = [...todos].map((list) => {
          if (list.id === id && editingText !== '') {
            list.text = editingText;
          }

          return list;
        });
         setTodos(updatedTodos);
         setTodoEditing(null);
      }
    return (
        <div className='todo-list'>
            <Todoform onSubmit={AddTodo} />
            {todos !== [] ?  (
                <ul className='listGroup'>
                    {todos.map((list,index) => (
                        <li className={list.isCompleted ? "todo-row complete" : "todo-row"} key={index}>
                            {list.text}
                            {list.id === todoEditing  ? (
                                <>
                                
                                   <input type="text" onChange={(e) => setEditingText(e.target.value)} className='editInput' />
                                   <div className='update' onClick={() => submitEdits(list.id)}> <IoIosAddCircleOutline /></div>
                                </>
                                ) :
                                (
                                    <div className='icons'>
                                        <div className='delete' onClick={() => handleRemove(list.id)}> <FaWindowClose /></div>
                                        <div className='edit'onClick={() => setTodoEditing(list.id)} ><FaEdit/> </div>
                                        
                                    </div>
                                )
                            }
                              
                        </li>
                    )) }
                </ul>
             ) : null
            }
        </div>
    );
}

export default TodoList;
