import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import CounterButton from './components/CounterButton'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Counter count={count} />
      <CounterButton setState={setCount} count={count} />
    </div>
  );
}



export default App;
