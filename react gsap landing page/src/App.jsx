import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from "./components/Cocktails"

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      
    </main>
  )
}

export default App
