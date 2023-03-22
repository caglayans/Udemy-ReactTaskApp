import Task from "./Task";
import { useContext } from 'react';
import TasksContext from '../context/task';

function TaskList() {

    const {tasks}=useContext(TasksContext);

    return ( <div className="taskList">
        { tasks.map((task, index) => {
            return <Task  key={index} prop={task} />
        })}
    </div> );
}

export default TaskList;

