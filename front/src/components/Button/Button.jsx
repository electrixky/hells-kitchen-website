import styles from './Button.module.scss'

const Button = ({children, style}) => {
	return <button type='Submit' className={`${styles.button} ${styles[style]}`}>{children}</button>
}

export default Button