import React from 'react'
import style from '../styles/keyboard.module.css'

type oneOctaveProps = {
  octave: number
  clickEvent: (key: string, octove: number) => any
}
const OneOctave = (props: oneOctaveProps) => {
  const key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  return (
    <div className={style.keyboard}>
      {key.map((val, index) => {
        const keyColor = val.length === 1 ? style.white : style.black
        const keyStyle = `${style.key} ${keyColor}`
        const Key = () => (
          <div
            className={keyStyle}
            onClick={() => props.clickEvent(val, props.octave)}
          >
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
  const clickEvent = (key: string, octove: number) => {
    console.log(key + octove)
  }
  return (
    <div>
      <OneOctave octave={4} clickEvent={clickEvent}></OneOctave>
    </div>
  )
}

Keyboard.defaultProps = {
  octaveNum: 3,
  scaleLabel: false,
}

export default Keyboard
