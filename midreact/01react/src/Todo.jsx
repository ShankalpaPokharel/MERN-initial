import React, { useState, useId } from "react";
import { v4 as uuid } from "uuid";

function Todo() {
    const [todo, setTodo] = useState([
        { id: 0, task: "sample task", status: false },
    ]);
    const [name, setName] = useState({ task: "" });

    const id = uuid();

    const [isEditable, setIsEditable] = useState(false);

    const [editValue, setEditValue] = useState(todo[0].task);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const task = e.target.elements.todo.value
        // console.log(e.target.elements.todo.value)

        // const id = uuid()

        setTodo([...todo, { id: id, task: name.task, status: false }]);
        setName({ task: "" });
    };

    const checkBoxChange = (el) => {
        // let status = el.status

        setTodo((prevTodo) =>
            prevTodo.map((todoS) => {
                if (todoS.id == el.id) {
                    return { ...todoS, status: !todoS.status };
                }
                return todoS;
            })
        );
        // console.log(el)
    };

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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id=""
                    value={name.task}
                    onChange={(e) => setName({ task: e.target.value })}
                />
                {/* <input type="text" name="todo" id="" /> */}
                <button>Add Task</button>
            </form>

            <table>
                <tr>
                    <th>SN</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Edit/Delete</th>
                </tr>

                {todo.map((el, index) => (
                    <tr key={el.id}>
                        <td>{index}</td>
                        {/* <td> {el.task}</td> */}
                        <td>
                            <input
                                type="text"
                                value={isEditable?editValue:el.task}
                                readOnly={!isEditable}
                                onChange={(e) =>handleEditOnChange(e,el)}
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
                                <button onClick={()=>handleEditSubmit(el)}>
                                    Submit
                                </button>
                            ) : (
                                <button onClick={()=>handleEdit(el)}>Edit</button>
                            )}
                            {/* <button>Edit</button> */}
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>

            <p>Output</p>
            {todo.map((el) => (
                <div key={el.id}>
                    <p>
                        Id: {el.id} Task : {el.task} || Staus:{" "}
                        {JSON.stringify(el.status)}
                    </p>
                    <input type="checkbox" checked={el.status} />
                </div>
            ))}
        </>
    );
}

export default Todo;
