import { useState } from 'react'
import React from 'react'



function App() {

  const [a, setNum] = useState(10)
  
  return(
  <div>
    <h3>Number is {num}</h3>
    <button onClick={function(){
      setNum(20)
    }}>Increment</button>
  </div> 
  )
}

export default App
