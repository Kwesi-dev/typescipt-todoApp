import React from 'react'
import "./addBox.css"
const AddBox = () => {
  return (
    <article className="addBox">
        <h1>Add to do</h1>
        <section className="add-container">
            <input type="text" className="add-input"/>
            <button className="addBtn">Add</button>
        </section>
    </article>
  )
}

export default AddBox