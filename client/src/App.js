import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import api from "./axios/axios";


const App = () => { 
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])
  const [refetchFlag, setRefetchFlag] = useState(false)

  

  const getTasks = useCallback(async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [])

  // const getTasks = async () => {

  //   try {
  //     const response = await client.get();
  //     setTasks(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    getTasks();
  }, [refetchFlag, getTasks])


// adding task 

// const addTask = (task) => {
// const id = Math.floor(Math.random() * 1000) + 1 //create a new and random ID//
// console.log(id)
// const newTask = {id, ...task} //we want the id and all the things that the user will write//
// setTasks([...tasks, newTask]) //we set the tasks already there and the new tasks/
// }



//delete task

// const deleteTask = (id) => {
//  setTasks(tasks.filter((task) => task.id !== id))
// }


//toggle reminder

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  const refetchTasks = () => {
    setRefetchFlag(!refetchFlag);
  };

 return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
     {showAddTask && <AddTask tasks={tasks} setTasks={setTasks} refetchFlag={refetchFlag}
       setRefetchFlag={setRefetchFlag} />}
    {tasks.length > 0 ? <Tasks refetchTasks={refetchTasks} tasks ={tasks}  onToggle={toggleReminder}/> : "No more tasks"}
    </div>
  )
}

export default App;
