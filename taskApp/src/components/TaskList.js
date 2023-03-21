import Task from "./Task";

function TaskList({props , onDel, onUpdate}) {
    return ( <div className="taskList">
        { props.map((prop, index) => {
            return <Task  key={index} prop={prop} onDelete={onDel} onEdit={onUpdate}/>
        })}
    </div> );
}

export default TaskList;

