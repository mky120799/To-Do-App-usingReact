import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import Button from './components/Button';
import "./style.css"
function App() {
  return (
   <div className='todo-container'>

      <Header/>
       <ToDoItem/>
       <ToDoItem/>
       <ToDoItem/>
       <ToDoItem/>
       <ToDoItem/>
       <ToDoItem/>
       
      <Button/>
   </div>
         
  );
}


export default App;
