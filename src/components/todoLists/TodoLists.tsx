import TodolistCard from '../todolistCard/TodolistCard'
import "./todoLists.css"
import { useState } from "react"
type todolistsProps = {
  todolist:{
    key: number
    data: string
  }[],
  deleteTodo: (key: number) => void
  // editTodo: (key: number) => void
  // saveTodo: (text: string) => void
}
const TodoLists = ({todolist, deleteTodo}: todolistsProps) => {
  const [text, setText] = useState<string>("")
  return (
    <div className="todoLists">
      <section className="edit-container">
        <div className="container-left">
          <p>Edit</p>
          <input type="text" className="edit-input" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="container-right">
          <button className="SaveBtn">Save</button>
        </div>
      </section>
      {todolist.map((todo)=>
        <TodolistCard key={todo.key} todo={todo} deleteTodo={deleteTodo}/>
      )}
    </div>
  )
}

export default TodoLists