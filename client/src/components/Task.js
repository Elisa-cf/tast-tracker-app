import { FaTimes } from 'react-icons/fa'
import api from '../axios/axios';

const Task = ({task, onToggle, refetchTasks}) => {
    async function deleteTasks(id) {
        try {
            await api.delete(`/tasks/${id}`);
            await refetchTasks();
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task._id)}>
            <h3>{task.text}<FaTimes style ={{color:'red', cursor:'pointer'}}  onClick={() => deleteTasks(task._id)}/></h3>
            <p>{task.deadline}</p>
        </div>
    )
}

export default Task
