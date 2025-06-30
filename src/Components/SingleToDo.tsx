import React, { useEffect, useState } from 'react'
import { Todo } from './model'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from 'react-icons/md'
import './style.css';
import ToDoList from './ToDoList';

type Props ={
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleToDo = ({todo,todos,setTodos}:Props) => {

 const [edit,setEdit]= useState<boolean>(false);
 const [editTodo,setEditTodo]= useState<string>(todo.todo);



    const handleDone = (id: number) => {
      setTodos(
          todos.map((item) =>
          item.id=== id?{...item, isDone: !item.isDone}:item
        )
      );
    }
 
    const handleDelete = (id: number) => {
    setTodos(
        todos.filter((item) => item.id !== id));  
      }

    const handleEdit = (e: React.FormEvent, id: number) => {
      e.preventDefault();
      setTodos(
        todos.map((item) => 
        item.id === id ? {...item, todo: editTodo} : item)
      );
      setEdit(false);
    }
const inputref = React.useRef<HTMLInputElement>(null);
useEffect(() => {
  inputref.current?.focus(); // Focus on the input when editing starts    ´
  },  [edit]);

  return (
   <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
    {
      edit?(
        <input 
          ref={inputref}
          value={editTodo}
          onChange={(e)=>setEditTodo(e.target.value)}
          className='todos__single--text'
          onBlur={()=>{
            setEdit(false);
            if(editTodo){
              setTodos(
                todos.map((item) => 
                  item.id === todo.id ? {...item, todo: editTodo} : item)
              );
            }
          }}          
        />

      ):(
        
      todo.isDone ?(
        <s className='todos__single--text todos__single--text_done'>{todo.todo}</s>
      ) :<span className='todos__single--text'>{todo.todo}</span>
    
      )

    }
    
        
        <div>
           <span className='icon'
              onClick={()=>{
                if(!edit && !todo.isDone){
                  setEdit(true);
                }
           }}>
                 {AiFillEdit({})}
            </span> 
             <span className='icon' onClick={()=>handleDelete(todo.id)}>
                 {AiFillDelete({})}
            </span> 
             <span className='icon' onClick={()=>handleDone(todo.id)}>
                 {MdDone({})}
            </span> 


          
        </div>
   </form>
  )
};

export default SingleToDo
