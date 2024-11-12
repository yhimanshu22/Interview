import { useState,useEffect } from 'react'
import axios from 'axios'

import './App.css'

import ContextApp from './Context'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //    alert("render once")
  // },[])

  // useEffect(()=>{alert('render on count')},[count])

  const [data,setData]  = useState()

  useEffect(()=>{

    async function fetchData(){
      await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => setData(res.data))
      .catch(e=>console.log(e))
     

    }
    fetchData();
  },[])

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => {setCount(count+1)}}>count</button>
      {/* <button onClick={() => {setData}}>change data</button> */}

      {data ? <div>{data.title}</div> : <div>loading....</div>}

      <ContextApp/>
    </>
  )
} 

export default App
