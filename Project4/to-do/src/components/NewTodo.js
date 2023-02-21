import { useState } from "react";


export default function NewTodo(props) {
    const [data, setData] = useState("");
    const [isActive, setActive] = useState(true);
    const newTextHandler = (e) => {
        setData(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        props.newTodoHandler({
            text: data, status: 'uncompleted', id: Math.floor(Math.random() * Date.now())
        });
        setData("");
    };
    const toggleClass = () => {
        setActive(!isActive);
    }
    return(
        <div className="new-task-wrapper">
            <form className={`new-task ${isActive ? "hidden" : ""}`}>
                <p className="new-task-desc"><label htmlFor="new-task">Add New To Do</label></p>
                <textarea onChange={newTextHandler} value={data} name="Text1" cols="22" rows="5" placeholder="Your text"></textarea>
                <br />
                <button onClick={submitTodoHandler} className="new-task-btn">Add</button>
            </form>
            <div className="plus-btn" onClick={toggleClass}>
                <i className="fas fa-plus-circle fa-3x fa-flag"></i>
            </div>
        </div>
        
        );
}
