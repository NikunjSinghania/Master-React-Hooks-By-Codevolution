import React, { useReducer } from 'react'

const initalState = {
    counter : 0,
    counter_2 : 0
}

const reduce = (state, action) => {
    switch(action.type) {
        case 1 : return {
            ...state,
            counter : state.counter + 1
        }
        case 0 : return {
            ...state,
            counter : state.counter - 1
        }
        default : return {
            ...state,
            counter : 0
        }
    }
}
function ReduceComplex() {
    const [value, dispatch] = useReducer(reduce, initalState)

  return (
    <>
    <button onClick={() => dispatch({type : 1})}>1</button>
    <button onClick={() => dispatch({type : 0})}>0</button>

    <div>{value.counter}</div>
    <div>{value.counter_2}</div>

    </>
  )
}

export default ReduceComplex