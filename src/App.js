import { useState } from 'react';
import './App.css';
import Todos from './TodosApp/Todos';
import Counter from './CounterApp/Counter';
 

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
