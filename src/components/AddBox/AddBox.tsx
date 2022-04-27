import "./addBox.css"
import React, { useState } from "react"

type addBoxProps = {
  addTodo: (event: React.MouseEvent<HTMLButtonElement>, data: string, setData: React.Dispatch<React.SetStateAction<string>>) => void
}
const AddBox = ({addTodo}: addBoxProps) => {
  const [data, setData] = useState<string>("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void=>{
      setData(event.target.value)
  }
  return (
    <article className="addBox">
        <h1>Add to do</h1>
        <section className="add-container">
            <input type="text" className="add-input" value={data} name="todo-data" onChange={handleChange}/>
            <button className="addBtn" onClick={(event) => addTodo(event, data, setData)}>Add</button>
        </section>
    </article>
  )
}

export default AddBox