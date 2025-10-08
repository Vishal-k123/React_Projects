import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 5;
 const addValue = ()=>{
    //counter ++;
    if (counter == 20) {
      return
    }
    setCounter(counter+1);
  }
  const removeValue = () =>{
    if (counter == 0) {
      return
    }
    setCounter(counter-1);
  }

  return (
    <>
     <h1>Chai ur React chal rha ha</h1>
     <h2>Counter Value : {counter}</h2>
     <button
     onClick={addValue}
     >Add-Value (+1) </button>
     <br />
     <button
     onClick={removeValue}>Remove-Value (-1) </button>
    </>
  )
}

export default App
