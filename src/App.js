import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container'
import Header from './components/Header';
import InputTask from './components/InputTask';
import { useEffect, useState } from 'react';
import TaskContent from './components/TaskContent';

function App() {

  //pasar las tareas a local storage

  let initialTasks = JSON.parse(localStorage.getItem("tasks"))

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks)

  useEffect(() => {
    console.log(initialTasks, tasks)
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTasks, tasks])

  const createTask = (task) => {
    setTasks([...tasks, task])
    console.log(task)
  }

  const deleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.idTask !== id)
    setTasks(currentTask)
  }



  return (
    <>
      <Container className='gral'>
        <Header className='header-gral'/>
        <InputTask className='input-gral' createTask={createTask} />
        <TaskContent className='taskcontent-gral' tasks={tasks} deleteTask={deleteTask}/>
      </Container>
    </>
  );
}

export default App;
