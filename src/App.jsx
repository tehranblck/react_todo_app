import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import Todolist from './components/Todolist'


function App() {
 

  const [toDoList, setToDoList] = useState([]);
  const addTodo = (newTodo) => {
    setToDoList([...toDoList, newTodo])
    
  }
  const removeToDo=(toDoId)=>{
  setToDoList([...toDoList.filter((item)=>item.id!=toDoId)])

  
  }
  const editTodo = (newTodo) => {
    const updateTodo= toDoList.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo
      } else {
         return newTodo
      }
     
    })
    console.log("salam")
    setToDoList([...updateTodo])
   
  }

  return (
    <div className='container_general'>
      <NewTodo addTodo={addTodo} />
      <Todolist edit={editTodo} remove={removeToDo} todoListt={toDoList} />
    </div>
  )
}

export default App
