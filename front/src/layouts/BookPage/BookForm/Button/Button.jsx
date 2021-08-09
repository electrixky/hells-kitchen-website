import styles from './Button.module.scss'

const Button = ({value}) => {
	return <div className={styles.input}>{value}</div>
}

export default Button