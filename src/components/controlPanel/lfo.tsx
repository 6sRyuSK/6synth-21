import RotaryEncoder from '../atoms/rotaryEncoder'

const LFO = () => {
  return (
    <div>
      <span>LFO</span>
      <RotaryEncoder label="Rate"></RotaryEncoder>
      <RotaryEncoder label="Depth"></RotaryEncoder>
    </div>
  )
}

export default LFO
