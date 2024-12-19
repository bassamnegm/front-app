import { useState } from "react";


function Home() {

    let [flag, setFlag] = useState(true);
    // condtion rendering
    function rednder() {
        if (flag) {
            return <h1>Home</h1>
        }
        else return <h1>Go To Login</h1>
    }

    return (
        <div>
            {/* {rednder()} */}
            {/* {flag == true ? <h1>Home</h1> : <h1>Go To Login</h1>} */}
            {flag && <h1>Home</h1>}

            <button onClick={() => setFlag(!flag)}>change</button>
        </div>
    )
}

export default Home;