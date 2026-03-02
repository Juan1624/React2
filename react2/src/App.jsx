import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Estado from './estado'
import String from './string'
import Booleano from './booleano'
import Lista from './Lista'

function App() {


  return (
    <>
      <Estado/>
      <String/>
      <Booleano/>
      <Lista/>
    </>
  )
}

export default App