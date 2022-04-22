import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./todolistCard.css"
const TodolistCard = () => {
  return (
    <article className="todolistCard">
        <section className="left">
            <input type="checkbox" className="checkbox"/>
            <p>Coding</p>
        </section>
        <section className="right">
            <EditIcon className="editIcon"/>
            <DeleteIcon className="deleteIcon"/>
        </section>
    </article>
  )
}

export default TodolistCard