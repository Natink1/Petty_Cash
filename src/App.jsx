import { useState } from 'react'
import './App.css'
import Petty from './Petty'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Petty/>
    </>
  )
}

export default App
