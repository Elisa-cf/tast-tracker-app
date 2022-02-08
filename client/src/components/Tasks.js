import Task from './Task'

const Tasks = ({ tasks, refetchTasks, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task._id} task={task} refetchTasks={refetchTasks} onToggle={onToggle}/>
         ))}

        </>

    ) 
}
export default Tasks

