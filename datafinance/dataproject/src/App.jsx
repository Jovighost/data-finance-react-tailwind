import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import Analystics from './components/Analystics'
import Newsletter from './components/Newsletter'
import Cards from './components/cards'
import Footer from './components/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Analystics/>
        <Newsletter/>
        <Cards/>
        <Footer/>
      </div>
     
    </>
  )
}

export default App
