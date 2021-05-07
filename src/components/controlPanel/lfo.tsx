import RotaryEncoder from '../atoms/rotaryEncoder'
import styles from '../../styles/controlPanel/lfo.module.css'

const LFO = () => {
  const onWheelRate = (val: number) => {
    console.log(val)
  }
  const onWheelDepth = (val: number) => {
    console.log(val)
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
