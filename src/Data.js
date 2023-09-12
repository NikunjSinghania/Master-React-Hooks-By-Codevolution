import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Data() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get('https://api.github.com/users/NikunjSinghania')
    .then((response) =>  {
        setData(response.data)
        setLoading(true)
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])
  return (
    <div>
        {loading && data.login}
    </div>
  )
}

export default Data