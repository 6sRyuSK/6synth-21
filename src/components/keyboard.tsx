import React from 'react'
import style from '../styles/keyboard.module.css'

type KeyboardProps = {
  octaveNum: number
  scaleLabel: boolean
}
const key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

type oneOctaveProps = { octave: number }
const OneOctave = (props: oneOctaveProps) => {
  return (
    <div className={style.keyboard}>
      {key.map((val, index) => {
        const className = `
        ${style.key} ${val.length === 1 ? style.white : style.black}
        `
        // isWhite or not
        return val.length === 1 ? (
          <div className={className}>
            {val}
            {val === 'C' && props.octave}
          </div>
        ) : (
          <div className={style.blackWrapper}>
            <div className={className}>{val}</div>
          </div>
        )
      })}
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
