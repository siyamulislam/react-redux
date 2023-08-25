import { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import Counter from './features/counter/components/Counter';
import Todos from './features/todos/components/Todos';
=======
import Todos from './TodosApp/Todos';
import Counter from './CounterApp/Counter';
 
>>>>>>> main

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const toggleComponent = () => {
    setShowCounter(!showCounter);
  };
  return (
    <div className="App">
<<<<<<< HEAD
      <h2>React Redux</h2>

      <button onClick={toggleComponent} className='SwitchBtn'>
=======
     <h2>React Redux</h2>
     <button onClick={toggleComponent} className='SwitchBtn'>
>>>>>>> main
        {showCounter ? 'Show Todos' : 'Show Counter'}
      </button >

      {showCounter ? <Counter /> : <Todos />}

    </div>
  );
}

export default App;