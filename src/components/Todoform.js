import React,   {useState} from 'react';

function  Todoform(props) {

    const [input, setInput] = useState('');

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
            
            <input type='text' placeholder='Add Contacts' value={input} name='text' className='todo-input' onChange = {handleChange}/>
            <button className='todo-button'>Add </button>
          
        </form>
    );
}

export default Todoform;
