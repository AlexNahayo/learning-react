import React from 'react';
import './App.css';

function App() {
  const topic = "React";
  const age = "React";
  const likes = ['JSX', 'React',  'Redux'];

  return (
    <div id="someId">
      {/* This is JSX*/}
      <h1 id="header-id">{topic} is Awesome!!</h1>
      <h2>{age}</h2>
      <h2>{likes}</h2>
      <h2>{String(true)}</h2>
      {
        true ? <h3>test</h3> : null //if else wont work directly in JSX
      }

      {
        likes.map(like => <h3 key={like}>{like}</h3>) //loops don't work in JSK so you need use map.
      }
    </div>
  );
}

export default App;
