import { useState } from 'react'
import { useCounterStore } from "./counterStore"

const Counter = () => {
  const {
    count,
    increment,
    decrement,
    incrementBy,
    decrementBy,
    username
  } = useCounterStore()

  const [incrementInput, setIncrementInput] = useState<number>(0) // this state is only for the input field
  const [decrementInput, setDecrementInput] = useState<number>(0) // this state is only for the input field

  return (
    <div>
      <h2>Username: {username}</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementBy(20)}>Increment By 20</button>

      <hr />

      <input type="number" value={incrementInput} onChange={(event) => setIncrementInput(Number(event.target.value))} />
      <button onClick={() => incrementBy(incrementInput)}>Increment Input</button>

      <hr />

      <input type="number" value={decrementInput} onChange={(event) => setDecrementInput(Number(event.target.value))} />
      <button onClick={() => decrementBy(decrementInput)}>Decrement Input</button>
    </div>
  )
}

export default Counter