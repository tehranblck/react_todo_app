import React, { useState } from 'react'
import '../css/todoItem.css'
import { MdDeleteForever } from "react-icons/md"
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Todo = ({ item, remove, edit }) => {
  const [editable, setEditable] = useState(false);
  
 
  const { id, content } = item
  const removeTodo = ()=>{
    remove(id)
  }
  const editTodo = () => {
    
    const updatedTodo = { ...item, content: newTodo };
    edit(updatedTodo);
    setEditable(false)

  }
  const [newTodo, setNewTodo] = useState(content);
  return (
    <div className='todoItem'>
     {
          editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='input' type="text" />
            : <span> {content}</span>
       }
      <div className="icons">
        
        <MdDeleteForever className='icon' onClick={removeTodo} />
        {editable? <FaCheck  className='icon' onClick={editTodo} /> :<FaEdit className='icon'   onClick={()=>{setEditable(true)}} /> }     
      </div></div>
  )
}

export default Todo