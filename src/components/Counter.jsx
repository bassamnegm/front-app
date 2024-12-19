import React, { useState } from 'react'


// rerender
function Counter() {
    console.log("first");
    let [count, setCount] = useState(0);
    function inCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inCount}>in</button>
        </div>
    )
}

export default Counter