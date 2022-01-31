import React from "react";
import {useState} from 'react';

function Hook1(){

    const [count,setCount] = useState(0);
    function handleCount(){
        return setCount(count + 1);
    }
    return (
        <>
            <hr />
        <div className="hook1">
            <h2>useState Hook</h2>
            <h3>You have clicked {count}times.</h3>
            <button onClick={handleCount}>Click Me</button>
        </div>
        <hr />
        </>
    );
}

export default Hook1;