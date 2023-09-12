import React, { useState, useEffect } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(prevCount => prevCount+1)
        }, 1000)
    }, [])

  return (
    <div>{count}</div>
  )
}

export default Counter  