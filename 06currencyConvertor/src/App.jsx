import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './components/InputBox'
import useCurrencyInfo from './Hooks/usecurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTimeout(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (

    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/01/02/06/coin-9165490_1280.jpg')",
        
      }}


    >
      <div className='w-full'>
        <div className='w-full mx-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
            <div className='w-full mb-1'>
              <InputBox
                label="form"
                amount={amount}
                currencyOpttions={options}
                onCurrencyChange={(currency) =>
                  setAmount(amount)
                }
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button type='button'
                className='absolute left-1/2-translate-x-1/2-translatey-1/2 border-2 border-white rounded-2xl bg-blue-600 px-2 py-0.5'
                onClick={swap}>
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOpttions={options}
                onCurrencyChange={(currency) =>
                  setTo(currency)
                }
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type='submit'
              className='w-full  bg-blue-600 px-4 py-3 rounded-lg text-white'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>

      </div>

    </div>
    
  )
}

export default App
