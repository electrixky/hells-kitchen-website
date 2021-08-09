import styles from './ButtonDate.module.scss'
import React, {FC} from "react"

interface IButtonDate {
	day: string,
	date: string
}

const ButtonDate: FC<IButtonDate> = ({ day, date }) => {
	return <div className={styles.input}>
		<div className={styles.cell}>{day}</div>
		<div className={styles.cell}>{date}</div>
	</div>
}

export default ButtonDate