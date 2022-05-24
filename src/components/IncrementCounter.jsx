/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const IncrementCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      {/* // eslint-disable-next-line react/button-has-type */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </div>
  );
};

export default IncrementCounter;
