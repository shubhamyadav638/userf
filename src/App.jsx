import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [count, setCount]=useState(0)
  const [number,setNumber]=useState()


  // const inputEl = useRef()
  // function getinput(){
  //   console.log(inputEl.current)
  //   inputEl.current.style.backgroundColor="red"
  // }




  // function d(){
  //  console.log("hello")
// ye simple js ek baar render ho raha hai but ui per update nahi ho raha to iske liye usestate ka use karte hai
  // }
  // const resut=d()



  useEffect(()=>{
    console.log("first effect")
  })

  useEffect(()=>{
    console.log("second effect")
  },[])

  useEffect(()=>{
    console.log("third effect")
  },[count])

  useEffect(()=>{
    console.log("fourth effect")
  },[number])

  useEffect(()=>{
    console.log("5 effect")
  },[number,count])


  return (
    <div>
      <h1>useref</h1>
      
      {/* <input type="text" ref={inputEl}
       />
      <button onClick={getinput}>click me</button> */}
      {/* <h1>{resut}</h1> */}

    <h1>{count}</h1>
    
    <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value); console.log(number)}} />
    <button onClick={()=>setCount((pre)=>pre+1)}>click</button>

    </div>
  )
}

export default App
