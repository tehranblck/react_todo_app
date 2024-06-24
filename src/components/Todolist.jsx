import React from 'react'
import Todo from './Todo'
import '../css/todoList.css'

const Todolist = ({ todoListt, remove, edit }) => {

  console.log( todoListt)
  return (
    <div className='todoList'>
      {todoListt && todoListt.map((item) => (
        <Todo edit={edit} remove={remove} key={item.id} item={item} />
      ))}
      
     
    </div>
  )
}

export default Todolist