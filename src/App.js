import './App.css';
import React , {useEffect, useState} from 'react'
import Mouse from './Mouse';
import Counter from './Counter';
import Data from './Data';
import ComponentC from './ComponentC';

export const UserContext = React.createContext()

function App() {
  // const initialCount = 0
  // const [display, setDisplay] = useState(true)
  // const [arr, setArr] = useState([1, 2, 3])
  // const [data, setData] = useState(initialCount)
  // const [obj, setObj] = useState({
  //   name : 'Nikunj Singhania',
  //   age : 22
  // })
  // const [x, setX] = useState('')
  // const [y, setY] = useState('')
  // const handleMouseMove = (e) => {
  //   setX(e.clientX)
  //   setY(e.clientY)

  // }

  // useEffect(() => {
  //   document.title = `Hey!!  ${data}`
  // })

  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove)

    
  // }, [])

  // useEffect(() => {
  //   console.log(obj);
  // }, [obj])

  // const incFive = () => {

  //   for(let i=1;i<=5;i++) {
  //     //setData(data+1)
  //     setData(prevData => prevData + 1);
  //   }
  // }

  // const add = () => {
  //   setArr([...arr, Math.random()]);
  // }

  return (
    <div className="App">
      {/* <Counter />
      <Data /> */}
      
      <UserContext.Provider value = {'Nikunj'}>
        <ComponentC />
      </UserContext.Provider>

      {/* <button onClick={() => setData(data+1)}>Inc : {data}</button>
      <button onClick={() => setData(data-1)}>Dec : {data}</button>
      <button onClick={() => setData(initialCount)}>Reset : {data}</button>
      <button onClick={incFive}>INC 5</button>


      <input type='text' onChange={(e) => setObj({ ...obj,  name : e.target.value })}/>
      <p>{obj.name} {obj.age}</p>
      {
        arr.map((e) => {
          return <h1>{e}</h1>
        })
      }

      <button onClick={add}>Add</button>

      {display && <Mouse />}
      <button onClick={() => setDisplay(!display)}>Display</button> */}
    </div>
  );
}

export default App;
