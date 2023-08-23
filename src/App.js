import { useState } from 'react';
import './App.css';
// import Counter from './CounterApp/Counter';
import Todos from './TodosApp/Todos';
import Counter from './CounterApp/Counter';
 

function App() {
  const [showCounter, setShowCounter] = useState(true);
  // const handleToggle = (event) => { setShowCounter(event.target.value === 'counter'); };
  const toggleComponent = () => {
    setShowCounter(!showCounter);
  };
  return (
    <div className="App">
     <h2>React Redux</h2>

     {/* <div className="Toggle">
        <input
          type="radio"
          name="componentToggle"
          value="counter"
          checked={showCounter}
          onChange={handleToggle}
        />
        <label htmlFor="counter">Show Counter</label>
        <input
          type="radio"
          name="componentToggle"
          value="todos"
          checked={!showCounter}
          onChange={handleToggle}
        />
        <label htmlFor="todos">Show Todos</label>
      </div> */}


     <button onClick={toggleComponent} className='SwitchBtn'>
        {showCounter ? 'Show Todos' : 'Show Counter'}
      </button >

      {showCounter ? <Counter /> : <Todos />}
      
    </div>
  );
}

export default App;
