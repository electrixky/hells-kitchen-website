import React from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
	style: string,
	type?: string
}

const Button: React.FC<IButtonProps> = ({ style, children }) => {
	return <button type='submit' className={`${styles.button} ${styles[style]}`}>{children}</button>
}

export default Button