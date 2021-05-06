import React from 'react'
import './App.css'
import Keyboard from './components/keyboard'
import { Oscillator } from './plugins/oscillator'

function App() {
  const synth = new Oscillator()
  const clickEvent = (frequency: number) => {
    console.log(frequency)
  }
  return (
    <div className="App">
      <Keyboard
        clickEvent={clickEvent}
        keyNum={17}
        firstKey={39}
        scaleLabel
      ></Keyboard>
    </div>
  )
}

export default App
