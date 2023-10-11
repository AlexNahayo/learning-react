import "./App.css";
import { useState, useCallback } from "react";
import GreetingBox from "./GreetingBox";

function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  // the below function is only called/rendered when name changes
  const getGreeting = useCallback(() => {
    return `Hello ${name}!`;
  }, [name]);

  // const getGreeting = () => {
  //   return `Hello ${name}!`; - This function will always render, causing performance issue. 
  // };

  return (
    <div className="App">
      <input
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <GreetingBox getGreeting={getGreeting} />

      {counter}
      <button onClick={() => setCounter(counter + 1)}>+ by 1</button>
    </div>
  );
}

export default App;