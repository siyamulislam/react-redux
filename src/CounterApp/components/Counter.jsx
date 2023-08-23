import React, { useState } from 'react'

const Counter=() => {
  const [count,setCount]=useState(0)
  const handelInc=()=>{
    setCount(count + 1); 
  }
  return (
    <div>
        <h3>Counter App</h3>
        <h3 style={{
        fontSize: '140%',
        position: 'relative',
        top: '5vh'}}
        > {count}</h3>
      
        <button onClick={handelInc} type="button" className='buttonInc' >Increment</button>
        <button onClick={handelInc} type='button' className='buttonDec' >Decrement</button>
        <button onClick={handelInc} type='button' className='buttonReset' >Reset</button>
        <button onClick={handelInc} type='button' className='buttonInc' >Increment by 25</button>
    </div>
  )
};
export default Counter;

// 1. state
// 2. actions - increment ,decrement, reset
// 3. reducer - increment -> count=> count+1
//    decrement, reset
// 4. store