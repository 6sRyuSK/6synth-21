import React from 'react'

type KeyboardProps = {
  octaveNum: number
  scaleLabel: boolean
}
const key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

type oneOctaveProps = { octave: number }
const OneOctave = (props: oneOctaveProps) => {
  return (
    <div>
      {key.map((val, index) => (
        <div className={val.length === 1 ? 'white' : 'black' + 'key'}>
          {val}
          {index === 0 ? props.octave : '' /* if key is C, display octave */}
        </div>
      ))}
    </div>
  )
}

const Keyboard: React.FC<Partial<KeyboardProps>> = (props) => {
  return (
    <div>
      <OneOctave octave={4}></OneOctave>
    </div>
  )
}

Keyboard.defaultProps = {
  octaveNum: 3,
  scaleLabel: false,
}

export default Keyboard
