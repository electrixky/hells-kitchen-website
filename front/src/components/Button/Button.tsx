import React, {FC} from 'react'
//import styles from './Button.module.scss'

const styles = require("./Button.module.scss")

interface IButton {
	children: React.ReactChild | React.ReactNode,
	style: string,
	type?: string
}

const Button: FC<IButton> = ({ children, style }) => {
	return <button type='submit' className={`${styles.button} ${styles[style]}`}>{children}</button>
}

export default Button