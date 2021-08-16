import styles from './ButtonDate.module.scss'
import React from "react"

interface IButtonDateProps {
	day: string,
	date: string
}

const ButtonDate: React.FC<IButtonDateProps> = ({ day, date }) => {
	return <div className={styles.input}>
		<div className={styles.cell}>{day}</div>
		<div className={styles.cell}>{date}</div>
	</div>
}

export default ButtonDate