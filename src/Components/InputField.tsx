import React from 'react';
import './style.css';
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {

    const inputref = React.useRef<HTMLInputElement>(null);

    return <form 
      className='input'
      onSubmit={(e)=>{        
        handleAdd(e);
        inputref.current?.blur(); // Remove focus from input after adding
        }}>

            
        <input type="input"
                ref={inputref}
               value={todo}
               onChange={
                     (e) => {
                          setTodo(e.target.value);
                     }
               }
               placeholder='Enter a task' 
               className='input_box' />
        <button className='input_submit' type="submit">Go</button>
        </form>;
    
}

export default InputField
