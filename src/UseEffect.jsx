import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [newMessage,setNewMessage] = useState(0);

    function handleMessage(){
        setNewMessage(newMessage + 1);
    }

    useEffect(()=>{
        document.title = `You have ${newMessage} new msessages.`;
    })


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
                    <h3>Watch Thapa Technical Video From MXPlayer</h3>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
}

export default UseEffect;