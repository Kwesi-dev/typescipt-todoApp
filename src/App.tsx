
import './App.css';

import AddBox from './components/AddBox/AddBox';
import TodoLists from './components/todoLists/TodoLists';
function App() {
  return (
    <div className="App">
      <section className="App-wrapper">
        <AddBox/>
        <TodoLists/>
      </section>
    </div>
  );
}

export default App;
