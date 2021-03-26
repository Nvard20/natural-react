import React,   {useState,useEffect,useRef} from 'react';

function  Todoform(props) {

    const [input, setInput] = useState();

    const handleChange = e => {
        
        setInput(e.target.value);


    }
    function HandleSubmit(e){

        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted:false

        })
        setInput('');
    }

    
    return (
        <form className='todo-form' onSubmit={HandleSubmit}>

          
            <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
             
            />
            <button  className='todo-button'>
                Add todo
            </button>
       
            </form>
        );
}

export default Todoform;
