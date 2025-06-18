import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import Analystics from './components/Analystics'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Analystics/>
      </div>
     
    </>
  )
}

export default App
