import {useRef, useEffect} from 'react'

const Focus = () => {
    const inputElemRef = useRef();

    useEffect(() => {
        inputElemRef.current.focus();
        inputElemRef.current.style.backgroundColor= 'blue'
    }, []);
    return(
        <input type="text" ref={inputElemRef}/>
    )
};

export default Focus;