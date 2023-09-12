import React, { useContext } from 'react'
import { UserContext } from './App'
function ComponentF() {

  const data = useContext(UserContext)

  return (
    <div>
        {data}
    </div>
  )
}

export default ComponentF