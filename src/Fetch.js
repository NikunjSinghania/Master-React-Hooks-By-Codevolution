import React, { useEffect, useReducer } from 'react'

const initalState = {
    loading : false,
    data : {}
}

const reducer = (state, action) => {
    switch(action.success) {
        case true : return {
            loading : true,
            data : action.data
        }
        default : return {
            loading : false,
            data : {}
        }
    }
}

function Fetch() {


  const [value, dispatch] = useReducer(reducer, initalState)

  const getData = () => {
    fetch('https://api.github.com/users/NikunjSinghania').then((res) => {
        res.json().then((data) => {
            dispatch({ success : true, loading : true, data: data });
        })
    })
  }

  useEffect(() => {
    console.log(value);
    getData()
  }, [])

  return (
    <div>
        {
            value.loading && value.data.login
        }
    </div>
  )
}

export default Fetch