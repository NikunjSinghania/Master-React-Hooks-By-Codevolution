import React, { useReducer } from 'react'

const initalState = 'YES'

const reduce = (state, action) => {
    switch(action) {
        case 1 : return 'YES'
        case 0 : return 'NO'
        default : return ''
    }
}

function Reduce() {

  const [value, dispatch] = useReducer(reduce, initalState)
  const [value_2, dispatch_2] = useReducer(reduce, initalState)


  return (
    <>
    
    <button onClick={() => dispatch(1)}>1</button>
    <button onClick={() => dispatch(0)}>0</button>

    <div>{value}</div>

    <button onClick={() => dispatch_2(1)}>1</button>
    <button onClick={() => dispatch_2(0)}>0</button>

    <div>{value_2}</div>
    </>
  )
}

export default Reduce