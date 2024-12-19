import React, { useState } from 'react'

function List() {
    // state data 
    let [arr, setArr] = useState(["Arts", "ENG", "Lows"]); // arr []
    // list rendering
    function add() {
        //   arr.push("FCI");
        setArr([...arr, "FCI"]);
    }
    return (
        <div><ul>
            {
                arr.map(function (item, index) {
                    console.log(item, index)
                    return <li key={index}>{item}</li>
                })
            }

        </ul>
            <button onClick={add}> add</button>
        </div>
    )
}

export default List