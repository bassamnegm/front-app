import React, { useState } from 'react'
import './style.css'


// function component
function About() {
    // state : data compoent dispaly 
    // logic
    console.log("first");
    let [user, setUser] = useState({
        name: "ali",
        age: 23,
        address: "alex"
    })
    //let name = "ahmed" // change 
    function changeName() {

        user.name = "mohamed";
        //let obj = { ...user, name: "mohamed", age: 111 }; // create new place with old data and change name
        //  obj = user; // copy ref

        setUser({ ...user, name: "mohamed", age: 111 });
        // udpate in memory
        // muation update
        // setName("mohamed"); // 
        // setAge(30);
        //  alert(name);

    }
    // ui
    return (
        <div>
            <h1 style={{ color: 'red' }} className='mycls'>Name: {user.name}</h1>
            <h1 style={{ color: 'red' }} className='mycls'>Age: {user.age}</h1>
            <h1 style={{ color: 'red' }} className='mycls'>Address: {user.address}</h1>

            <button onClick={changeName}>change Name</button>
        </div>
    )
}

export default About    