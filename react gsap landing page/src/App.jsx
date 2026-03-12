import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)
import './App.css'

function App() {
  return (
    <div className='flex-center h-[100vvh]'>
     <h6 className='text-3xl text-indigo-300'>Hello</h6>
    </div>
  )
}

export default App
