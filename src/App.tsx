
import './App.css';
import AddBox from './components/AddBox/AddBox';
import TodoLists from './components/todoLists/TodoLists';
import { useState } from "react"

type todolistType = {
  key: number
  data: string
}[]
function App() {
  const [todolist, setTodolist] = useState<todolistType>([
    {
      key: 1,
      data: "coding for hours"
    }
  ])
  // const [toEditData, setToEditData] = useState<string>("")
  // const [Key, setKey] = useState<number>(0)
  const addTodo = ( event: React.MouseEvent<HTMLButtonElement>, data: string, setData: React.Dispatch<React.SetStateAction<string>>): void =>{
      setTodolist((prevState) => {
        return [
          { key: Math.random(), data: data},
          ...prevState
        ]
      })
      setData("")
  } 
  const deleteTodo = ( key: number): void => {
    setTodolist((prevState) => {
      return prevState.filter((tododata) => tododata.key !== key)
    })  
  }
  // const editTodo = (key: number): void => {
  //     let toEdit = todolist.filter((tododata) => tododata.key === key)
  //     setToEditData(toEdit[0].data);
  //     setKey(toEdit[0].key)
  // }
  // const saveTodo = (text: string): void => {
  //     setTodolist((prevState) => {
  //       return [
  //         {key: Key, data: text},
  //         ...prevState
  //       ]
  //     })
  // }
  return (
      <div className="App">
        <section className="App-wrapper">
          <AddBox addTodo={addTodo}/>
          {/* {
            toEditData && 
            <article className="banner">
              <p>Editing Text: {toEditData}</p>
            </article>
          } */}
          <TodoLists todolist={todolist} deleteTodo={deleteTodo}/>
        </section>
      </div>
  );
}

export default App;
