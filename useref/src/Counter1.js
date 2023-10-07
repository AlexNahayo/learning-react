import { useState } from 'react';

//Example with UseState, where count is being re rendered
const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return(
    <>
    {count}
    <button
        onClick={ handleClick }> 
        Click Me
    </button>
    </>
  )
};

export default Counter1;