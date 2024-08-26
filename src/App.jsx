import'./components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = ( ) => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "learning React "},
    {id: 2, name: " Watching Youtube "}
  ])

  const Aiko = "Akira Ken";
  const age = 25;
  const data ={
    address: "Aiko",
    country: "Vietnam"
  }

const addNewtodo = (name) =>{
  alert(`call me ${name}`) 
}

//{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title"> Todo List </div>
     <TodoNew 
      addNewtodo={addNewtodo}
     />
     <TodoData 
      name={Aiko}
      age={age} 
      data={data}
      todoList={todoList}
     />
     <div className='todo-image'>
      <img src={reactLogo} className='logo'/>
     </div>
    </div>
  )
}

export default App
