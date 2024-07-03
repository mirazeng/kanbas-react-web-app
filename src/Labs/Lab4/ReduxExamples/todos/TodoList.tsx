import React, {useState} from "react";
import {useSelector} from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
    /*const [todos, setTodos] = useState([
        {id: "1", title: "Learn React"},
        {id: "2", title: "Learn Node"}]);
    const [todo, setTodo] = useState({id: "-1", title: "Learn Mongo"});
    const addTodo = (todo: any) => {
        const newTodos = [...todos, {
            ...todo,
            id: new Date().getTime().toString()
        }];
        setTodos(newTodos);
        setTodo({id: "-1", title: ""});
    };
    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    const updateTodo = (todo: any) => {
        const newTodos = todos.map((item) =>
            (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({id: "-1", title: ""});
    };*/

    const {todos} = useSelector((state: any) => state.todosReducer);

    return (
        /*<div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm
                    todo={todo}
                    setTodo={setTodo}
                    addTodo={addTodo}
                    updateTodo={updateTodo}/>
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        deleteTodo={deleteTodo}
                        setTodo={setTodo}/>
                ))}
                <li className="list-group-item">
                    <input value={todo.title}
                           onChange={(e) =>
                               setTodo({
                                   ...todo,
                                   title: e.target.value
                               })
                           }
                    />
                    <button onClick={() => addTodo(todo)}
                            id="wd-add-todo-click" className="btn btn-success" style={{marginLeft: '10px'}}>Add
                    </button>
                    <button onClick={() => updateTodo(todo)}
                            id="wd-update-todo-click" className="btn btn-warning" style={{marginLeft: '10px'}}>Update
                    </button>
                </li>
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        {todo.title}
                        <button onClick={() => setTodo(todo)}
                                id="wd-set-todo-click" className="btn btn-primary" style={{marginLeft: '120px'}}>
                            Edit
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}
                                id="wd-delete-todo-click" className="btn btn-danger" style={{marginLeft: '10px'}}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>*/

        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm/>
                {todos.map((todo: any) => (
                    <TodoItem todo={todo}/>
                ))}
            </ul>
            <hr/>
        </div>

    );
}
