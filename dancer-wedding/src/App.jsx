import React, { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Nav from './components/Nav'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <hgroup>
        <Background/>
      </hgroup>
    </>
  )
}

export default App
