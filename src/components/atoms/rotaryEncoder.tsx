import React, { useEffect } from 'react'
import styles from '../../styles/atoms/rotaryEncoder.module.css'

type props = {
  size?: number
}

const RotaryEncoder: React.FC<props> = (props: props) => {
  const style = {
    width: props.size + 'px',
    height: props.size + 'px',
  }
  useEffect(() => {
    const Elm = document.getElementsByClassName(
      styles.rotaryEncoder
    )[0] as HTMLDivElement
    let rotate = 0
    Elm.onwheel = (e) => {
      rotate += Math.sign(e.deltaY) * 10
      console.log(rotate)
      Elm.style.transform = `rotate(${rotate}deg)`
    }
  })
  return (
    <div style={style} className={styles.rotaryEncoder}>
      <div className={styles.dot}></div>
    </div>
  )
}

RotaryEncoder.defaultProps = {
  size: 32,
}

export default RotaryEncoder
