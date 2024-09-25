import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  console.log(counter);

  const handleIncrement = () => {
    dispatch({
      type: 'increment',
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'decrement',
    });
  };
  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
