import styles from '../../styles/atoms/rotaryEncoder.module.css'

type props = {
  size?: number
}

const RotaryEncoder: React.FC<props> = (props: props) => {
  const style = {
    width: props.size + 'px',
    height: props.size + 'px',
  }
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
