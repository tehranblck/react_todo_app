import React, { useState } from 'react'
import '../css/newTodo.css'
function NewTodo({ addTodo }) {
    const [newTodoItem, setNewTodoItem] = useState("")
    const createTodo = ()=>{
        if(!newTodoItem){
            return
        }
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodoItem
        }
        addTodo(request)
        setNewTodoItem('')
    }
    
  return (
      <div className='container_newtodo'>
          <h1 className='title'>Todo App</h1>
          <div className="container">
            <input value={newTodoItem} onChange={(e)=>setNewTodoItem(e.target.value)} className='input' type="text" />
            <button onClick={createTodo} className='btn-1'>Add Todo</button>
         </div>
    </div>
  )
}

export default NewTodo