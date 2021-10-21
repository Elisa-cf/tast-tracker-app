import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => { 
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30 pm",
        reminder: true,
        
    },
    {
        id: 2,
        text: "Meeting at school",
        day: "Feb 6th at 1:30 pm",
        reminder: true,
        
    },
    {
        id: 3,
        text: "Food shooping",
        day: "Feb 5th at 2:30 pm",
        reminder: false,
        
    }
])


//delete task

const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id !== id))
}


//toggle reminder

const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}


 return (
    <div className="container">
    <Header /> 
    {tasks.length > 0 ? <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No more tasks"}
    </div>
  )
}

export default App;
