import React, { useState, useEffect } from "react";

//Custom Hook1 : useDocumentTitle
const useDocumentTitle = title => {
    useEffect(()=>{
        document.title = title;
    },[title]);
}

const CustomHooks = () => {
  const [count, setCount] = useState(0);
  const title = `You have clicked ${count} times.`;
  useDocumentTitle(title); // used custom hook 1

  return (
    <>
      <div className="useEffectClass">
        <h2>Learning Custom Hooks from here : </h2>
        <a href="https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e">
          Custom Hooks
        </a>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count+1)}>Increment</button>
      </div>
      <hr />
    </>
  );
};

export default CustomHooks;
