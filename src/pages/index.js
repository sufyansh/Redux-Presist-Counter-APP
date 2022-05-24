/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { incrementCounter, decrementCounter } from '../store/counter/action';

function counter() {
  const globalState = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>GLOBAL COUNTER :- {globalState}</h1>
      <button onClick={() => dispatch(incrementCounter(globalState))}>Increment +</button>
      {'  '}
      <button onClick={() => dispatch(decrementCounter(globalState))}>Decrement -</button>
      <br />
      <br />
      <p>
        Try to reload this page or open a new tab
        <br />
        or view this page another time.
        <br />
        You will see the same value everytime.
        <br />
        Because the global state is persistent
        <br />
        and saved in the localstorage!
      </p>

      <Link href="/counter">
        <a>Go to Counter Page</a>
      </Link>
    </>
  );
}

export default counter;
