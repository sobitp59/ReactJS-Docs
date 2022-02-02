import React , {useState} from 'react';

 const UseState = () => {
    const [multiply, setMultiply] = useState(2);
    const [countmul, setCountmul] = useState(0);
    
    function handleMultiply(){
        setMultiply(multiply * 2);
        setCountmul(countmul + 1);
    }

    return(
        <>
        <div className='useStateClass' >

            <h2>Using the useState Hook</h2>
            <h3>Multiplying by 2 every time gives : {multiply}</h3>
            <h3>You have multiplied {countmul} times</h3>
            <button onClick={handleMultiply}>Multiply</button>
        </div>
            <hr/>
        </>
    )
}

export default UseState;