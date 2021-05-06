import React from 'react'
import style from '../styles/keyboard.module.css'
import Frequency from '../constants/frequency'

type KeyboardProps = {
  scaleLabel: boolean
  keyNum: number
  firstKey: number | string
  clickEvent: (frequency: number) => any
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  const clickEvent = (frequency: number) => props.clickEvent

  const keyindex =
    typeof props.firstKey === 'string'
      ? Frequency.findIndex((val) => val[1] === props.firstKey)
      : props.firstKey

  const key = [...Array(props.keyNum)].map((val, index) => [
    Frequency[index + keyindex][0],
    Frequency[index + keyindex][1],
  ]) as [number, string][]
  console.log(key)
  return (
    <div className={style.keyboard}>
      {key.map(([freq, scale]) => {
        const keyColor = scale.length === 2 ? style.white : style.black
        console.log(scale.length === 2)
        const keyStyle = `${style.key} ${keyColor}`
        const Key = () => (
          <div className={keyStyle} onClick={() => props.clickEvent(freq)}>
            {scale.match(/C/) && scale}
          </div>
        )
        const wrapperStyle =
          keyColor === style.black ? style.blackWrapper : undefined
        return (
          <div className={wrapperStyle} key={scale}>
            <Key></Key>
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
