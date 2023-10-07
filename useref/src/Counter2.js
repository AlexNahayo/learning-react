import { useState, useEffect } from 'react';

//Example with UseState, where count is being re rendered is stuck in an infinite loop
const Counter2 = () => {
  const [count, setCount] = useState(0);

  useEffect (() => {
    setCount((prev) => prev + 1)
  });

  return(
    <>
    {count}
    </>
  )
};

export default Counter2;