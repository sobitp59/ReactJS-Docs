import React from "react";
import {useState,useEffect} from 'react';

function Hook1(){

    const [count,setCount] = useState(0);
    function handleCount(){
        return setCount(count + 1);
    }
    useEffect(()=>{
        document.title = `You have clicked ${count} times.`;
    })
    return (
        <>
            <hr />
        <div className="hook1">
            <h2>useState Hook</h2>
            <h3>Hooks at a Glance</h3>
            <h3>You have clicked {count} times.</h3>
            <button onClick={handleCount}>Click Me</button>
        </div>
        <hr />
        </>
    );
}

export default Hook1;


//Rules of HOOKS 🔥

// Hooks are JavaScript functions, but they impose two additional rules:
// Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
// Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. 
// (There is just one other valid place to call Hooks — your own custom Hooks.

// Function component was previously known as Stateless Component
