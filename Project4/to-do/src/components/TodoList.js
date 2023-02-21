import Todo from "./Todo";


export default function TodoList(props) {
    const filterUiNameHandler = () => {
        if (props.filterStatus === 'uncompleted') return 'To Do';
        if (props.filterStatus === 'completed') return 'Done';
        if (props.filterStatus === 'deleted') return 'Trash';
    };
    return(
        <div>
            <p className="filter-name">{filterUiNameHandler()}</p>
            <hr />
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Todo obj={todo} key={todo.id} updateTodo={props.updateTodo}/>
                ))}
            </ul>
        </div>
    )
};

