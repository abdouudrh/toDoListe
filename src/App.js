import './App.css';
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="to-do-container">
          <AddTodo className="search" />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
export default App;