import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [Password, setPassword] = useState("")

  //Ref Hook
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"

    if (char) str += "!@#$%^&*-=_+[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, char, setPassword])

  const copyPassToClip = useCallback(() => {
    passRef.current?.select(null)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>PassWord Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={Password}
            className='outline-none w-full rounded-lg overflow-hidden mb-4 bg-white'
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassToClip}
            className='outline-none bg-blue-600 text-white px-3 h-7'
            >
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gapx-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setlength(e.target.value)
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setnumber((prev) => !prev)
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={char}
              id='charInput'
              onChange={() => {
                setchar((prev) => !prev)
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
