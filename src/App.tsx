import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
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











const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // const [name, setName] = useState<string>("Tinesh Shah");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
