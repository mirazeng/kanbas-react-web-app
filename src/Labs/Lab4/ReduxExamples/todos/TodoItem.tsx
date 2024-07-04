import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, setTodo} from "./todosReducer";

export default function TodoItem({todo}: { todo: { id: string; title: string } }) {
    const dispatch = useDispatch();

    return (
        <li key={todo.id} className="list-group-item">
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click" className="btn btn-danger" style={{marginLeft:"130px"}}> Delete
            </button>
            <button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click" className="btn btn-primary" style={{marginLeft:"10px"}}> Edit
            </button>
        </li>
    );
}
