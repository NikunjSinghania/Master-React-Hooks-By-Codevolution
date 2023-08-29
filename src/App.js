import './App.css';
import {useState} from 'react'
function App() {
  const initialCount = 0
  const [arr, setArr] = useState([1, 2, 3])
  const [data, setData] = useState(initialCount)
  const [obj, setObj] = useState({
    name : 'Nikunj Singhania',
    age : 22
  })
  const incFive = () => {

    for(let i=1;i<=5;i++) {
      //setData(data+1)
      setData(prevData => prevData + 1);
    }
  }

  const add = () => {
    setArr([...arr, Math.random()]);
  }

  return (
    <div className="App">
      <button onClick={() => setData(data+1)}>Inc : {data}</button>
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
    </div>
  );
}

export default App;
