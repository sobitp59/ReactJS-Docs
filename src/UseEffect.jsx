import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [newMessage,setNewMessage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.screen.width);
    const [name, setName] = useState('Sobit');

    function handleMessage(){
        setNewMessage(newMessage + 1);
    }

    const actualScreenSize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>{
        document.title = `You have ${newMessage} new msessages.`;
        window.addEventListener('resize', actualScreenSize);
        //cleanup function
        return () => {
            window.removeEventListener('resize', actualScreenSize);
        }
    },[name]);
    // dependencies in useEffect


    return (
        <React.Fragment>
            <div className="useEffectClass">
                <h2>Using The useEffect Hook</h2>
                {/* Effects without cleanup */}
                <div>
                <h2>Effects without CLEANUP</h2>
                <h3>You have {newMessage} new messages.</h3>
                <button onClick={handleMessage}>Click Me</button>
                </div>
                {/* Effects with cleanup */}
                <div>
                    <h2>Effects with CLEANUP</h2>
                    <h3>The actual size of the window is : {windowWidth}</h3>
                </div>
                <button onClick={() => setName('Rohit')}>Change Name</button>
                <p>{name}</p>
            </div>
            <hr />
        </React.Fragment>
    );
}

export default UseEffect;