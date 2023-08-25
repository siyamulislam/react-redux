import { useState } from 'react';
import './App.css';
import Counter from './features/counter/components/Counter';
import Todos from './features/todos/components/Todos';

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const toggleComponent = () => {
    setShowCounter(!showCounter);
  };
  return (
    <div className="App">
      <h2>React Redux</h2>

      <button onClick={toggleComponent} className='SwitchBtn'>
        {showCounter ? 'Show Todos' : 'Show Counter'}
      </button >

      {showCounter ? <Counter /> : <Todos />}

    </div>
  );
}

export default App;