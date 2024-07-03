import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <div id="wd-counter-use-state">
            <h3>Counter: {count}</h3>
            <button
                onClick={() => { setCount(count + 1) }}
                id="wd-counter-up-click" className="btn btn-success">
                Up
            </button>

            <button
                onClick={() => { setCount(count - 1)}}
                id="wd-counter-down-click"
                className="btn btn-danger" style={{ marginLeft: '10px'}}>
                Down
            </button>
            <hr/>
        </div>
    );
}
