import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
      </div>
     
    </>
  )
}

export default App
