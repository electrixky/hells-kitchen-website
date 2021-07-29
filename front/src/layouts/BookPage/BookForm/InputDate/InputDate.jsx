import styles from './InputDate.module.scss'

const InputDate = ({ day, date }) => {
	return <div className={styles.input}>
		<div className={styles.cell}>{day}</div>
		<div className={styles.cell}>{date}</div>
	</div>
}

export default InputDate