import RotaryEncoder from '../atoms/rotaryEncoder'
import styles from '../../styles/controlPanel/lfo.module.css'
import { Synth } from '../../App'
import { useContext } from 'react'

const LFO = () => {
  const synth = Synth
  const onWheelRate = (val: number) => {
    synth.changeLFORate(val)
  }
  const onWheelDepth = (val: number) => {
    synth.changeLFODepth(val)
  }
  return (
    <div className={styles.lfo}>
      <span>LFO</span>
      <RotaryEncoder label="Rate" wheelEvent={onWheelRate}></RotaryEncoder>
      <RotaryEncoder label="Depth" wheelEvent={onWheelDepth}></RotaryEncoder>
    </div>
  )
}

export default LFO
