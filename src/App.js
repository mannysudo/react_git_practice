import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(() => {
    console.log('run function');
    return 10
  })
  
  function decrementCount() {
    setCounter(prevCount => prevCount - 1)
  }
  
  function incrementCount() {
    setCounter(prevCount => prevCount + 1)
  }
  

  return (
    <div>
        <button onClick={decrementCount}>-</button>
        <span> {counter} </span>
        <button onClick={incrementCount}>+</button>
    </div>
      
  );
}

export default App;
