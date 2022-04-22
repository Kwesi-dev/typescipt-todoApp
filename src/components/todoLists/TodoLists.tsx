import React from 'react'
import TodolistCard from '../todolistCard/TodolistCard'
import "./todoLists.css"
const TodoLists = () => {
  return (
    <div className="todoLists">
      <section className="edit-container">
        <div className="container-left">
          <p>Edit</p>
          <input type="text" className="edit-input"/>
        </div>
        <button className="SaveBtn">Save</button>
      </section>
      <TodolistCard/>
      <TodolistCard/>
      <TodolistCard/>
    </div>
  )
}

export default TodoLists