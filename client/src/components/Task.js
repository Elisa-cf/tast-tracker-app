import { FaTimes } from 'react-icons/fa'
import axios from "axios";

const Task = ({task, onToggle, refetchTasks}) => {

    console.log(task);

    const client = axios.create({
        baseURL: "http://localhost:8000/api"
    });
    async function deleteTasks(id) {
        try {
            await client.delete(`/tasks/${id}`);
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
