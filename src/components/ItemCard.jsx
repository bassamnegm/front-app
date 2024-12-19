import React, { useState } from 'react'

function ItemCard(props) {
    console.log(props);
    //let [data, setData] = useState(props);

    //useCallback(data)

    function callParentFn() {
        //   props.title = "ay 7age" get error beacuse can not change of props
        props.fn("negm"); //call function prams
    }
    return (
        <div>
            <img src={props.img} />
            <div>{props.title}</div>
            <button onClick={callParentFn}>click</button>
        </div>
    )
}

export default ItemCard