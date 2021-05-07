import React, { useEffect } from 'react'
import styles from '../../styles/atoms/rotaryEncoder.module.css'

type props = {
  size?: number
  limit?: [number, number]
  label: string
}

const RotaryEncoder: React.FC<props> = (props: props) => {
  const style = {
    width: props.size + 'px',
    height: props.size + 'px',
  }
  useEffect(() => {
    const Elm = document.getElementById(props.label) as HTMLDivElement
    let rotate = props.limit![0]
    Elm.style.transform = `rotate(${rotate}deg)`
    Elm.onwheel = (e) => {
      rotate += Math.sign(e.deltaY) * 10
      rotate = Math.min(Math.max(props.limit![0], rotate), props.limit![1])
      console.log(rotate)
      Elm.style.transform = `rotate(${rotate}deg)`
    }
  })
  return (
    <div className={styles.wrapper}>
      <div style={style} className={styles.rotaryEncoder} id={props.label}>
        <div className={styles.dot}></div>
      </div>
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}

RotaryEncoder.defaultProps = {
  size: 32,
  limit: [-140, 140],
}

export default RotaryEncoder
