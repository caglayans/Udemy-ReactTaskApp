import { createContext } from "react";
import { useState } from 'react';
import axios from 'axios';

const TasksContext=createContext();

function Provider({children}){

    const [tasks, setTasks] = useState([]);

    const createTask = async (taskTitle,taskDesc)=>{

        const response = await axios.post('http://localhost:3004/tasks', {
        title:taskTitle,
        text:taskDesc
        });

        console.log(response);
        const createdTasks=[...tasks, response.data]
        setTasks(createdTasks);
    }

    const fetchData=async ()=>{
        const response = await axios.get('http://localhost:3004/tasks');
        setTasks(response.data)
    };

    const deleteTaskById=async (id)=>{
        await axios.delete(`http://localhost:3004/tasks/${id}`);
        const afterDeletedTasks=tasks.filter((task)=> {
          return task.id!==id
        })   
        setTasks(afterDeletedTasks);
    }
    
    const editTaksById = async (id,editedTitle,editedText)=>{
        await axios.put(`http://localhost:3004/tasks/${id}`,{
          title:editedTitle,
          text:editedText
        });
        const editedTasks= tasks.map((task)=> {
            if(task.id === id){
            return { id:id, title:editedTitle, text:editedText}
            }
            return task;
        });
      setTasks(editedTasks);
    };

    const sharedValuesAndMethods={
        tasks:tasks,
        createTask:createTask,
        fetchData:fetchData,
        deleteTaskById:deleteTaskById,
        editTaksById:editTaksById
    }

    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export {Provider};
export default TasksContext;