import React, { useEffect, useState } from 'react';
// Custom Hook 2
function useLocalStorage(key,defaultVal){
    const [state,setState] = useState(()=>{
        let value;
        try{
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultVal)
            );
        }catch(e){
            value = defaultVal;
        }
        return value;
    });
    useEffect(()=>{
        window.localStorage.setItem(key,state);
    },[state]);
    return [state, setState];
}

function CustomHooks2() {
    const [increment, setIncrement] = useLocalStorage("myAppCount",0);
    const [count, setCount] = useLocalStorage("myAppCount",10);
        
    const handleNum = () => {
                setCount(count+1);
                setIncrement(increment+1);
}
  return(
      <>
          <div className="useEffectClass">
              <h2>This is customHook 2</h2>
              <h3>{increment}</h3>
              <h3>{count}</h3>
              <button onClick={handleNum}>INCREMENT</button>
          </div>
          <hr />
      </>
  );
}

export default CustomHooks2;

