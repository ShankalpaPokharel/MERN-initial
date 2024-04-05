import React,{useState} from "react";

function TodoRow(todo) {
    const [isEditable, setIsEditable] = useState(false);
    const [editValue, setEditValue] = useState(todo.todo.task);


    const handleEditSubmit = (el) => {
        setTodo(prevTodo=> prevTodo.map((taskS)=>{
            if (taskS.id == el.id){
                return {...taskS,task:editValue}
            }
            return taskS
        }))
       
        setIsEditable(false);
    };
    const handleEdit = (el) => {
        setIsEditable(!isEditable);
        
    };
    const handleEditOnChange = (e) => {
        // const [editValue, setEditValue] = useState(el.task);
        setEditValue(e.target.value);
        

    };


    return (
        <>
            <td>
                <input
                    type="text"
                    value={isEditable ? editValue : el.task}
                    readOnly={!isEditable}
                    onChange={(e) => handleEditOnChange(e, el)}
                />
            </td>
            <td>
                <input
                    type="checkbox"
                    checked={el.status}
                    onChange={() => checkBoxChange(el)}
                />
            </td>
            <td>
                {isEditable ? (
                    <button onClick={() => handleEditSubmit(el)}>Submit</button>
                ) : (
                    <button onClick={() => handleEdit(el)}>Edit</button>
                )}
                {/* <button>Edit</button> */}
                <button>Delete</button>
            </td>
        </>
    );
}

export default TodoRow;
