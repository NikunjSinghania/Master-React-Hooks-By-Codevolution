import React, { useContext } from 'react'
import { CounterContext } from './App'

function ComponentCh() {

  const value = useContext(CounterContext)
  return (
    <>
        <div>{value.counter}</div>
        <button onClick={() => value.dispatch(1)}>1</button>
        <button onClick={() => value.dispatch(0)}>0</button>
    </>
  )
}

export default ComponentCh