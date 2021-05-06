import React from 'react'
import style from '../styles/keyboard.module.css'

type oneOctaveProps = { octave: number; onClick?: () => {} }
const OneOctave = (props: oneOctaveProps) => {
  const key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  return (
    <div className={style.keyboard}>
      {key.map((val, index) => {
        const keyColor = val.length === 1 ? style.white : style.black
        const keyStyle = `${style.key} ${keyColor}`
        const Key = () => (
          <div className={keyStyle}>
            {val === 'C' ? val + props.octave : val}
          </div>
        )
        const wrapperStyle =
          keyColor === style.black ? style.blackWrapper : undefined
        return (
          <div className={wrapperStyle} key={val + props.octave}>
            <Key></Key>
          </div>
        )
      })}
    </div>
  )
}

type KeyboardProps = {
  octaveNum: number
  scaleLabel: boolean
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
