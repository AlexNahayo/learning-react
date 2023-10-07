import { useState, useRef, useEffect } from 'react';

//Example with useRef, here we have fixed the problem that wa seen Counter2.
const Counter3 = () => {
  const countRef = useRef(0);

  const [searchTerm , setSearchTerm ] = useState('')

  useEffect (() => {
    countRef.current = countRef.current + 1;
  });

  return(
    <>
    <input 
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} />
      {countRef.current}
    </>
  )
};

export default Counter3;