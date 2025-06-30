import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/model';
import TodoList from "./Components/ToDoList";




const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) { // If todo is not empty}
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(""); // Clear the input field after adding
    }
  };


  
  console.log(todos);
  // const [name, setName] = useState<string>("Tinesh Shah");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}






// TypeScript Basics

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
type Person = {
  name: string;
  age?: number;
}

let person: Person = {
  name: "Tinesh Shah",

}

let printName: (name: string) => number;

function printName1(name: string): number {
  return 26;
}

type someobject = {
  x: number,
  y: number
}
function printCoord(pt: someobject) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

let personName: unknown; //Dont know what it returs.
export default App;
