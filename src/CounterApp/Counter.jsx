import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementByAmountCounter, incrementCounter, resetCounter } from '../redux/actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counterR.count);
  // const {count} = store.getState(); 
  const [incrementValue, setIncrementValue] = useState(25); // Initialize with a default value

  const dispatch = useDispatch();
  const handelInc = () => {
    // store.dispatch(incrementCounter())
    dispatch(incrementCounter())
  }
  const handelDec = () => { if(count>0)dispatch(decrementCounter()) };
  const handelReset = () => { dispatch(resetCounter()) };
  const handelIncByValue = () => {
    const parsedIncrementValue = parseInt(incrementValue, 10);
    if (!isNaN(parsedIncrementValue)) {
      dispatch(incrementByAmountCounter(parsedIncrementValue));
    }
  };

  return (
    <div>
      <h3>Counter App</h3>
      <h3 style={{
        fontSize: '140%',
        position: 'relative',
        top: '5vh'
      }}
      > {count}</h3>

      <button onClick={handelInc} type="button" className='buttonInc' >Increment</button>
      <button onClick={handelDec} type='button' className='buttonDec' >Decrement</button>
      <button onClick={handelReset} type='button' className='buttonReset' >Reset</button>
      <input type="number" value={incrementValue} onChange={(e) => setIncrementValue(e.target.value)} placeholder="inc value" />
      <button onClick={handelIncByValue} type='button' className='buttonInc' >Increment by {incrementValue}</button>
    </div>
  )
};
export default Counter;

// 1. state
// 2. actions - increment ,decrement, reset
// 3. reducer - increment -> count=> count+1
//    decrement, reset
// 4. store