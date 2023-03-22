import { useState } from "react";
import Taskcreate from "./Taskcreate"
import { useContext } from "react";
import TaskContext from '../context/task'

function Task({prop}) {

    const {deleteTaskById,editTaksById}=useContext(TaskContext);

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick=()=>{
        deleteTaskById(prop.id)
    }

    const handleEditClick=()=>{
        setShowEdit(true);
    }

    const handleEditSubmit=(id, editedTitle, editedText)=>{
        setShowEdit(false);
        editTaksById(id, editedTitle, editedText);
    }

    return ( <div className="task">

        { showEdit ? <Taskcreate editingTask={prop} taskFormEdit={true} onEdit={handleEditSubmit}/>
             :
            (<div>
                <h3 className="title">Göreviniz</h3>
                <p>{prop.title}</p>
                <h3 className="title">Yapılacaklar</h3>
                <p>{prop.text}</p>

                <div>
                    <button className="delete" onClick={handleDeleteClick}>Sil</button>
                    <button className="update" onClick={handleEditClick}>Güncelle</button>

                </div>
            </div>) }


        
    </div> );
}

export default Task;