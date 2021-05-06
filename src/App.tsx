import React from 'react'
import './App.css'
import Keyboard from './components/keyboard'
import ControlPanel from './components/controlPanel'
import { Oscillator } from './plugins/oscillator'

function App() {
  const synth = new Oscillator()
  const mousedown = (frequency: number) => {
    synth.play(frequency)
  }
  const mouseup = () => {
    synth.stop()
  }
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <Keyboard
        mousedown={mousedown}
        mouseup={mouseup}
        keyNum={36}
        firstKey={'C3'}
        scaleLabel
      ></Keyboard>
    </div>
  )
}

export default App
