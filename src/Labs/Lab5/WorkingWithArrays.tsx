import React, {useState} from 'react';
import e from "express";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {

    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todo2, setTodo2] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todo3, setTodo3] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todo4, setTodo4] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todo5, setTodo5] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    // Special Event Handler for checkbox toggling "completed" status information of an td item
    const handleCompletedStatusToggle = () => {
        setTodo5({...todo5, completed: !todo5.completed});
    }


    const API = `${REMOTE_SERVER}/lab5/todos`;

    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>

            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <hr/>

            <h4>Filtering Array Items</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
               href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <hr/>

            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <input id="wd-todo-id" value={todo.id} className="form-control w-50"
                   onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <hr/>

            <h4>Creating new Items in an Array</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
               href={`${API}/create`}>
                Create Todo
            </a>
            <hr/>

            <h4>Deleting from an Array</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary float-end"
               href={`${API}/${todo2.id}/delete`}>
                Delete Todo with ID = {todo2.id} </a>
            <input value={todo2.id} className="form-control w-50"
                   onChange={(e) => setTodo2({...todo2, id: e.target.value})}/>
            <hr/>

            <h4>Updating an Item in an Array</h4>
            <a href={`${API}/${todo3.id}/title/${todo3.title}`} className="btn btn-primary float-end">
                Update Todo</a>
            <input value={todo3.id} className="form-control w-25 float-start me-2"
                   onChange={(e) => setTodo3({...todo3, id: e.target.value})}/>
            <input value={todo3.title} className="form-control w-50 float-start"
                   onChange={(e) => setTodo3({...todo3, title: e.target.value})}/>
            <br/><br/>
            <hr/>

            <h4>Updating Item Description in an Array</h4>
            <a href={`${API}/${todo4.id}/description/${todo4.description}`} className="btn btn-primary float-end">
                Update Description</a>
            <input value={todo4.id} className="form-control w-25 float-start me-2"
                   onChange={(e) => setTodo4({...todo4, id: e.target.value})}/>
            <input value={todo4.description} className="form-control w-50 float-start" type={"text"}
                   onChange={(e) => setTodo4({...todo4, description: e.target.value})}/>
            <br/><br/>
            <hr/>

            <h4>Completed or Not</h4>
            <a href={`${API}/${todo5.id}/completed/${todo5.completed}`} className="float-end btn btn-primary me-2">
                Toggle Completion Status
            </a>

            <input value={todo5.id} className="form-control w-25 float-start me-2"
                   onChange={(e) => {
                       console.log(e.target.value);
                       setTodo5({...todo5, id: e.target.value})
                   }
                   }/>
            <div className={"float-start"}>
                <input value={"true"} type={"checkbox"} id={"check_completed"}
                       className="form-check-input w-25 float-start me-2"
                       onChange={() => {
                           handleCompletedStatusToggle();
                       }}/>
                <label htmlFor={"check_completed"}>Toggle Completed</label>
            </div>
            <br/><br/>
            <hr/>
        </div>
    );
}
