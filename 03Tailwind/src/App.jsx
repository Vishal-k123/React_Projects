import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    
      <h1 className='bg-amber-300 p-4 rounded-3xl text-black mb-4'>TaiWind ji Test</h1>
      <Card username="Chai ur Code" btnText="Click me"/>
      <Card username="Hello"/>
    </>
  )
}

export default App
