import RotaryEncoder from '../atoms/rotaryEncoder'
import styles from '../../styles/controlPanel/lfo.module.css'

const LFO = () => {
  return (
    <div className={styles.lfo}>
      <span>LFO</span>
      <RotaryEncoder label="Rate"></RotaryEncoder>
      <RotaryEncoder label="Depth"></RotaryEncoder>
    </div>
  )
}

export default LFO
