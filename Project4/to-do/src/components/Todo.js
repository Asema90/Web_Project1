import { useState } from "react";


export default function Todo(props){
    const [isActive, setActive] = useState(true);
    const showDeleteTab = () => {
        setActive(!isActive);
    };

    const onChangeHandler = (e) => {
        if(e.target.checked) {
            props.updateTodo(props.obj.id, 'makeDone');    
        } 
        else{
            props.updateTodo(props.obj.id, 'makeUndone');
        }
    }
    const deleteItemHandler = () => {
        props.updateTodo(props.obj.id, 'makeDelete');
        setActive(false);
    }
    return(
        <li>
            <div className="todo-item">
                <button className="vert-dots-btn"><span className="vert-dots" onClick={showDeleteTab}>&#8942;</span></button>
                <input type="checkbox" checked={props.obj.status==="completed"} onChange={onChangeHandler}/>
                <span className={`${props.obj.status==="completed" ? "crossed" : ""}`}>{props.obj.text}</span>
            </div>
            <div className={isActive ? 'hidden-no-place' : null}>
                <div className="delete-modal">
                    <button className="trash-btn" onClick={deleteItemHandler}>
                        <i className="fas fa-trash space"></i>
                        Move to Trash
                    </button>
                </div>
            </div>
        </li> 
    )
};
