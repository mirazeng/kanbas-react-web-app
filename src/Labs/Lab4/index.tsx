import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import {useState} from "react";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateBooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./ReduxExamples/todos/TodoList";

export default function Lab4() {

    function sayHello() {
        alert("Hello");
    }

    const [ count, setCount ] = useState(7);
    console.log(count);

    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>
        </div>
    );
}