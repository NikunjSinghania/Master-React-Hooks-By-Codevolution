import React, { useEffect, useState } from 'react'

function Mouse() {

    const [x, setX] = useState()
    const [y, setY] = useState()

    const handleMouseMove =(e) => {
        console.log('Called');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            console.log('Component Unmount');
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

  return (
    <div>
        {x} - {y}
    </div>
  )
}

export default Mouse