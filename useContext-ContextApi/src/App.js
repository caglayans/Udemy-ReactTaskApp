import './App.css';
import TaskCreate from './components/Taskcreate';
import TaskList from './components/TaskList';
import { useEffect, useContext } from 'react';
import TasksContext from './context/task';


function App() {

  const {fetchData}=useContext(TasksContext);

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
