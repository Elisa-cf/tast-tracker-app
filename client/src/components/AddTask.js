import {useState} from 'react'
import axios from "axios";

const AddTask = ({tasks, setTasks, refetchFlag, setRefetchFlag}) => {
const[newText,setNewText] = useState("")
const[newDeadLine,setNewDeadLine] = useState("")
const[newReminder,setNewReminder] = useState(false)

    const newTasks = (e) => {
        e.preventDefault();

        setTasks([
            ...tasks,
            { text: newText, deadline: newDeadLine, reminder: newReminder },
        ]);

        axios
            .post("/tasks", {
                text: newText, deadline: newDeadLine, reminder: newReminder
            })
            .then(function (response) {
                console.log(response);
            })
            .then(function () {
                setRefetchFlag(!refetchFlag);
            })
            .catch(function (error) {
                console.log(error);
            });

        setNewText("");
        setNewDeadLine("");
        setNewReminder("")
    };

    return (
        <form className="add-form" onSubmit={newTasks}>
            <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={newText} onChange={(e) => setNewText(e.target.value)} required />
            </div> 
            <div className="form-control">
            <label>Day</label>
            <input type="date" placeholder="Add the day" value={newDeadLine} onChange={(e) => setNewDeadLine(e.target.value)}/>
            </div> 
            <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={newReminder} value={newReminder} onChange={(e) => setNewReminder(e.currentTarget.checked)}/>
            </div> 
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
