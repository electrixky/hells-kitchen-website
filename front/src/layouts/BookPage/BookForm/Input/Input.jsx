import styles from './Input.module.scss'

const Input = ({value}) => {
	return <div className={styles.input}>{value}</div>
}

export default Input