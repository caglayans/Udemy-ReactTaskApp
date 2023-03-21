import {useState} from 'react';

function TaskCreate({onCreate, editingTask, taskFormEdit, onEdit}) {

    const [title, setTitle] = useState(editingTask ? editingTask.title : '');
    const [text, setText] = useState(editingTask ? editingTask.text : '');

    const handleTitleChange=(event)=>{
        setTitle(event.target.value);
    }

    const handleTextChange=(event)=>{
        setText(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(taskFormEdit){
            onEdit(editingTask.id, title, text)
        }
        else{
            onCreate(title, text);
        }
        setTitle('');
        setText('');
    }

    return ( 
    
    <div> { taskFormEdit ? 
        (<div className="taskEdit">
            <h3>Lütfen Taskı Düzenleyiniz!</h3>

            <form className="taskForm">
                <label className="taskLabel">Başlığı Düzenleyiniz!</label>
                <input value={title} onChange={handleTitleChange}/>

                <label className="taskLabel">Taskı Düzenleyiniz!</label>
                <textarea value={text} rows="5" onChange={handleTextChange}/>

                <button className="editButton" type="submit" onClick={handleSubmit}>Güncelle</button>
            </form>
        </div>) : 
        (<div className="taskCreate">           
                <h3>Lütfen Task Giriniz!</h3>

                <form className="taskForm">
                    <label className="taskLabel">Başlık</label>
                    <input value={title} onChange={handleTitleChange}/>

                    <label className="taskLabel">Task Giriniz!</label>
                    <textarea value={text} rows="5" onChange={handleTextChange}/>

                    <button type="submit" onClick={handleSubmit}>Oluştur</button>
                </form>
        </div> )}
    
    </div>
    
    );
}

export default TaskCreate;