import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./todolistCard.css"

type todoListCardProps = {
  todo:{
    key: number
    data: string
  }, 
  deleteTodo: (key: number) => void
  // editTodo: (key: number) => void
}

const TodolistCard = ({todo, deleteTodo}: todoListCardProps) => {
  return (
    <article className="todolistCard">
        <section className="left">
            <input type="checkbox" className="checkbox"/>
            <p>{todo.data}</p>
        </section>
        <section className="right">
            <div className="editIcon-container">
              <EditIcon className="editIcon"/>
            </div>
            <div className="deleteIcon-container">
              <DeleteIcon className="deleteIcon" onClick={()=>deleteTodo(todo.key)}/>
            </div>
        </section>
    </article>
  )
}

export default TodolistCard