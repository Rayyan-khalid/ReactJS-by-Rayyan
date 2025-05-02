import React, { useState } from "react";

const APP= ()=>{

  let [counter, setCounter]= useState(15);

  // let counter = 15;
   
  const addValue =()=>{
    console.log("clicked",counter);
    // counter = counter+1;
    if(counter<20){
      setCounter(counter+1);
    }
       
  } 


 
    const removeValue =()=>{
      console.log("clicked",counter);
      if (counter>0) {
        setCounter(counter-1);   
      }
     
  
    }

  

  return (
    <>
      <h1>Rayyan Khalid</h1>
      <h1>Counter Value:{counter}</h1>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default APP