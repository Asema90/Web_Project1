import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";  
import vector from './assets/Vector.png'


// button-group
const buttons = [
  {
    type: "active",
    label: "To do",
  },
  {
    type: "done",
    label: "Done",
  },
  {
    type: "all",
    label: "All",
  },
  {
    type: "trash",
    label: "Trash",
  },
  
];

const itemsData = [
  {
    key: uuid(),
    label: "Write Essay",

  },
  {
    key: uuid(),
    label: "One Hour CSS Course Online",

  },
  {
    key: uuid(),
    label: "Buy One Way Tickets to San Fransico",

  },
];





function App() {

  const [value, setValue] = useState("");
  const [items, setItems] = useState(itemsData);
  const [type, setType] = useState("all");


  const handleItemAdd = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
 
    const newItem = {
      key: uuid(),
      label: value,

    } 
    setItems([...items, newItem])
  }

  const handleDone = (keyFromButton) => {
    const index = items.findIndex(item => item.key === keyFromButton)
    const oldObject = items[index]
    const newObject = {...oldObject, isDone: !oldObject.isDone}
    const leftPart = items.slice(0, index)
    const rightPart = items.slice(index+1, items.length)
    const newItems = [...leftPart, newObject, ...rightPart]
    setItems(newItems)

  }


  const handleTrash = (keyFromButton) => {
    const index = items.findIndex(item => item.key === keyFromButton)
    const oldObject = items[index]
    const newObject = {...oldObject, isTrash: !oldObject.isTrash}
    const leftPart = items.slice(0, index)
    const rightPart = items.slice(index+1, items.length)
    const newItems = [...leftPart, newObject, ...rightPart]
    // const newItems2=newItems.filter(item=>item.key !== keyFromButton);
    setItems(newItems)

  }


  const handleStatus = (typeFromButton) => {
    setType(typeFromButton)
  }

  const handleDelete = (keyFromButton) => {
    const index = items.findIndex(item => item.key === keyFromButton)
    const leftPart = items.slice(0, index)
    const rightPart = items.slice(index+1, items.length)
    const newItems = [...leftPart, ...rightPart]
    setItems(newItems)
  }

  const filteredItems = items.filter(item => 
      type === 'all' ? item 
      : type === 'active' ? ((!item.isDone) && (!item.isTrash))
      : type === 'trash' ? item.isTrash 
      : item.isDone)

  return (
    <div className="todo-app">
      <div className="app-header">
        <h1>Simple To Do List</h1>
        <h2>Today is awesome day. The weather is awesome, you are awesome too!</h2>
      </div>


      <div className="top-panel d-flex">
          {buttons.map((itemB) => (
            <button
              
              key={itemB.type}
              type="button"
              className="btn"
              onClick={()=>handleStatus(itemB.type)
              }
            >
              <label>{itemB.label}</label>
              
            </button>
          ))}
      </div>

      <div className="p_todo">
        <p>To Do</p>
        <div className="vertical-divider">-</div>
      </div>

      {/* List-group */}
      <ul className="todo-list">
        {filteredItems.map((item) => (
          <li key={item.key} className="list-group-item">
            <span className={`todo-list-item ${item.isDone? "done" : ""}`} 
            // onClick={()=>handleDone(item.key)}
            >
              <div className="icons">
                {/* <input className="icon_menu" type="button"></input> */}
                <button className="icons_btn">
                  <img src={vector} className="icons_img"></img>
                </button>
                <input className="icon" type="checkbox" onClick={()=>handleDone(item.key)}></input>
                </div>
              
              <span
                className="todo-list-item-label"
                onClick={()=>handleDone(item.key)}
              >
                <label className="ll">{item.label}</label>
              </span>
              

              {/* <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
              >
                <i className="fa fa-exclamation" />
              </button> */}

              <button
                type="button"
                className="btntrash btn-outline-danger btn-sm float-right"
                onClick={() => handleTrash(item.key)}
              >
                <i className="fa fa-trash-o" />
              </button>
            </span>
          </li>
        ))}
      </ul>

      <div className="item-add-form d-flex">
        <p className="item-add-form2">Add New To Do</p>
        <input
          value={value}
          type="text"
          className="form-control"
          placeholder="Your text"
          onChange={handleItemAdd}
        />
        <button className="btn btn-outline-secondary" onClick={handleSubmit}>
          <label className="add-label">Add</label>
        </button>
      </div>

      <div className="footer">
        <div className="frame22">
          <div className="menu2">
              <div className="btn2">
                <label>Made with ❤️ at nFactorial in 2022.</label>
              </div>
          </div>
          <div className="btn3">
            <label>Credits: icons from Icons8.</label>
          </div>
        </div>
       </div>
    </div>
    
  );
}

export default App;

